// A page that includes this tells the machine what it saw, instead of somebody
// reading a small screen aloud. It only watches; it changes nothing on the page.
(function () {
  var lines = [];
  var started = Date.now();
  var pending = null;
  var seen_values = {};

  function stamp() {
    return String(Date.now() - started) + "ms";
  }

  function screen_line() {
    var v = window.visualViewport;
    var visual = v
      ? Math.round(v.width) + "x" + Math.round(v.height) + " top " + Math.round(v.offsetTop) + " scale " + v.scale
      : "none";
    return "window " + window.innerWidth + "x" + window.innerHeight
      + " | visual " + visual
      + " | page has focus: " + document.hasFocus()
      + " | " + document.visibilityState;
  }

  function describe(el) {
    if (!el) { return "nothing"; }
    if (el === document || el === window) { return "page"; }
    var name = el.tagName || "?";
    if (el.id) { name = name + "#" + el.id; }
    if (el.placeholder) { name = name + " [" + el.placeholder.slice(0, 24) + "]"; }
    return name;
  }

  function boxes() {
    return [].slice.call(document.querySelectorAll("input, textarea"));
  }

  function values() {
    var out = [];
    var list = boxes();
    var i = 0;
    while (i < list.length) {
      out.push(describe(list[i]) + ": [" + list[i].value + "]");
      i = i + 1;
    }
    if (out.length === 0) { return "no writing boxes on the page"; }
    return out.join("\n");
  }

  function report() {
    return [
      "browser: " + navigator.userAgent,
      "page: " + location.href,
      "screen: " + screen_line(),
      "focused: " + describe(document.activeElement),
      "",
      values(),
      "",
      "events:",
      lines.slice(-260).join("\n")
    ].join("\n");
  }

  // A mark you can see, so the person holding the phone knows the watcher is
  // awake and that what it sees is arriving. It never takes a tap.
  var mark = null;
  var sent = 0;
  function mark_said(words) {
    if (!mark) {
      mark = document.createElement("div");
      mark.setAttribute("style", "position:fixed;top:0;right:0;z-index:2147483647;background:#900;color:white;font:0.7rem monospace;padding:0.15rem 0.4rem;border-bottom-left-radius:0.4rem;pointer-events:none");
    }
    // it hangs off the page itself, not the body, and puts itself back if it
    // goes: an app that redraws the whole body would otherwise take it away.
    if (!mark.isConnected) { document.documentElement.appendChild(mark); }
    mark.textContent = words;
  }

  // Who is sending, in three plain words, so every page that is watching keeps a
  // file of its own. One shared file loses the report that matters: a page left
  // open on the machine writes every three seconds, and the phone's one account
  // of the fault is overwritten long before anybody reads it.
  function sender() {
    var ua = navigator.userAgent;
    var device = "computer";
    if (/Android/.test(ua)) { device = "android"; }
    if (/iPhone|iPad|iPod/.test(ua)) { device = "iphone"; }
    var browser = "browser";
    if (/Safari/.test(ua)) { browser = "safari"; }
    if (/Chrome|CriOS/.test(ua)) { browser = "chrome"; }
    if (/Edg/.test(ua)) { browser = "edge"; }
    if (/Firefox|FxiOS/.test(ua)) { browser = "firefox"; }
    var parts = location.pathname.split("/");
    var page = parts[parts.length - 1].replace(/\.html$/, "");
    return device + " " + browser + " " + page;
  }

  function send_now() {
    pending = null;
    var body = JSON.stringify({ f_name: "phone_report_write", args: [sender(), report()] });
    mark_said("rec …");
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body
    }).then(function () {
      sent = sent + 1;
      mark_said("rec " + sent);
    }, function () {
      mark_said("rec ✗ no reach");
    });
  }

  function send() {
    if (pending) { clearTimeout(pending); }
    pending = setTimeout(send_now, 400);
  }

  // What the browser says about the key matters as much as which key it was. A
  // number of 229 is the browser saying "the keyboard is still making up its
  // mind", which is a different fault from a key that simply never arrived, and
  // the two look identical without it.
  function note(e) {
    var key = e.key ? " key=" + e.key : "";
    if (e.type.indexOf("key") === 0 && e.keyCode !== undefined) { key = key + " number=" + e.keyCode; }
    if (e.isComposing) { key = key + " still being made up"; }
    if (e.isTrusted === false) { key = key + " not from a finger"; }
    var data = e.data ? " data=" + e.data : "";
    if (e.inputType) { data = data + " how=" + e.inputType; }
    if (e.type === "pageshow" && e.persisted) { data = data + " kept from before"; }
    lines.push(stamp() + " " + e.type + " on " + describe(e.target) + key + data + " | " + screen_line());
    send();
  }

  var types = ["focus", "blur", "keydown", "keyup", "keypress", "beforeinput", "input",
    "compositionstart", "compositionupdate", "compositionend", "change", "resize",
    "visibilitychange", "pagehide", "pageshow", "hashchange"];
  var t = 0;
  while (t < types.length) {
    window.addEventListener(types[t], note, true);
    t = t + 1;
  }

  function watch() {
    // read the boxes straight off the page, so a letter that arrives without any
    // event still shows up - and so does a box being replaced under the writer.
    var list = boxes();
    var found = {};
    var changed = false;
    var i = 0;
    while (i < list.length) {
      var el = list[i];
      var name = describe(el) + "#" + i;
      found[name] = true;
      if (seen_values[name] === undefined) {
        lines.push(stamp() + " BOX APPEARED " + name + " [" + el.value + "]");
        changed = true;
      } else if (seen_values[name] !== el.value) {
        lines.push(stamp() + " VALUE NOW [" + el.value + "] in " + name);
        changed = true;
      }
      seen_values[name] = el.value;
      i = i + 1;
    }
    for (var was in seen_values) {
      if (!found[was]) {
        lines.push(stamp() + " BOX GONE " + was);
        delete seen_values[was];
        changed = true;
      }
    }
    if (changed) { send(); }
  }
  setInterval(watch, 250);

  var beats = 0;
  setInterval(function () {
    beats = beats + 1;
    lines.push(stamp() + " still here (" + beats + ") focused " + describe(document.activeElement) + " | " + screen_line());
    send();
  }, 3000);

  lines.push(stamp() + " recorder ready | " + screen_line());
  send_now();
})();
