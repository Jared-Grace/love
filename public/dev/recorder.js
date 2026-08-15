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

  function send_now() {
    pending = null;
    var body = JSON.stringify({ f_name: "phone_report_write", args: [report()] });
    fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body
    }).catch(function () { });
  }

  function send() {
    if (pending) { clearTimeout(pending); }
    pending = setTimeout(send_now, 400);
  }

  function note(e) {
    var key = e.key ? " key=" + e.key : "";
    var data = e.data ? " data=" + e.data : "";
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
