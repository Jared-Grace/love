import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { fn_name } from "./fn_name.mjs";
import { server_url_api } from "./server_url_api.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
export function html_viewport_readout_when_asked(bar) {
  "when the page's address ends in ?viewport, a small box of numbers in the corner of the screen saying how tall the window is by every measure the browser keeps, and where the bar held against the top really is - read live, so a person on a phone can screenshot it with the browser's own bar showing and again with it slid away, and the two pictures say which height went stale";
  "made for the home bar losing its top row on a phone with the text size turned up, once the browser's bar slid away, 2026-09-28. On a desktop there is no bar that slides, so it cannot be seen here, and measuring on the phone is the only way to know";
  "asked for in the part before the #, because the # part is the app's own and it rewrites it as a person moves between screens; left out, nothing is drawn and nothing is listened to";
  "the three heights a stylesheet can ask for - dvh, svh, lvh - are read off empty boxes of those heights, because the browser answers them nowhere else";
  "every bar still on the page is listed, because a page may hold more than one frame and the last one drawn is not always the one a person sees - the first readout showed a bar of no height";
  "the bar comes as the wrapper every html_ maker hands back, so the element is taken out of it before it is measured - asked directly, the wrapper has no size and no place on the page";
  "ONE box for the whole page, hung on the page's outermost element rather than in the body, because a screen empties the body each time it draws and a box kept there vanished with the first redraw - it never showed at all. Each new bar is told to the box, which reads whichever bar is on the page now";
  let b = window.location.search.includes("viewport");
  if (not(b)) {
    return;
  }
  let state = window.html_viewport_readout_state;
  if (state) {
    state.bars.push(bar);
    state.update();
    return;
  }
  let box = document.createElement("pre");
  Object.assign(box.style, {
    position: "fixed",
    right: "0",
    bottom: "0",
    margin: "0",
    padding: "2px",
    background: "transparent",
    color: "red",
    "font-size": "11px",
    "line-height": "1.2",
    "z-index": "100000",
    "pointer-events": "none",
    opacity: "0.85",
  });
  let page = document.documentElement;
  page.appendChild(box);
  let probes = {};
  for (let unit of ["dvh", "svh", "lvh"]) {
    let probe = document.createElement("div");
    Object.assign(probe.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "0",
      height: "100" + unit,
      visibility: "hidden",
      "pointer-events": "none",
    });
    page.appendChild(probe);
    probes[unit] = probe;
  }
  function round(n) {
    let p = multiply(n, 10);
    let top2 = Math.round(p);
    let divided = divide(top2, 10);
    return divided;
  }
  function update() {
    let viewport = window.visualViewport;
    let bars = [];
    for (let each_bar of state.bars) {
      let element = html_component_element_get(each_bar);
      if (element.isConnected) {
        let rect = element.getBoundingClientRect();
        bars.push(
          "bar top " +
            round(rect.top) +
            " bottom " +
            round(rect.bottom) +
            " style top " +
            element.style.top,
        );
        ("each button in the bar is listed with where it sits and whether it is shown at all, because the bar measured still at the top on a phone while the human saw its first button gone, 2026-09-28 - so the next question is which of the bar's own things moved or went");
        for (let button of element.querySelectorAll("button")) {
          let box_button = button.getBoundingClientRect();
          let style = getComputedStyle(button);
          bars.push(
            "  button " +
              button.textContent.slice(0, 24) +
              " top " +
              round(box_button.top) +
              " bottom " +
              round(box_button.bottom) +
              " left " +
              round(box_button.left) +
              " right " +
              round(box_button.right) +
              " " +
              style.display +
              " " +
              style.visibility,
          );
        }
      }
    }
    ("the five things reaching furthest right, when any reaches past the screen, are listed too, because opening the last lesson group on a phone made the page 429 wide on a 414 screen, 2026-09-28 - the browser then widened its frame to fit, the frame grew taller than the screen, and the bar held to the frame top slid above what is seen. Which thing sticks out is only known on the phone, where the text is drawn larger");
    let screen_width = window.screen.width;
    let reaching = [];
    for (let each of document.body.querySelectorAll("*")) {
      let right = each.getBoundingClientRect().right;
      if (greater_than(right, screen_width)) {
        reaching.push({
          right,
          each,
        });
      }
    }
    function lambda2(a, b) {
      let difference = subtract(b.right, a.right);
      return difference;
    }
    reaching.sort(lambda2);
    bars.push("screen width " + screen_width);
    for (let item of reaching.slice(0, 5)) {
      bars.push(
        "  wide " +
          item.each.tagName +
          " right " +
          round(item.right) +
          " width " +
          round(item.each.getBoundingClientRect().width) +
          " " +
          item.each.textContent.slice(0, 40),
      );
    }
    let v = bars.join("\n");
    let n2 = performance.now();
    let lines = [
      "innerHeight " + window.innerHeight,
      "clientHeight " + document.documentElement.clientHeight,
      "dvh " + round(probes.dvh.getBoundingClientRect().height),
      "svh " + round(probes.svh.getBoundingClientRect().height),
      "lvh " + round(probes.lvh.getBoundingClientRect().height),
      "vv height " + (viewport ? round(viewport.height) : "none"),
      "vv offsetTop " + (viewport ? round(viewport.offsetTop) : "none"),
      "vv scale " + (viewport ? round(viewport.scale) : "none"),
      "scrollY " + round(window.scrollY),
      "page height " + round(document.documentElement.scrollHeight),
      v,
      "dpr " + round(window.devicePixelRatio),
      "innerWidth " + window.innerWidth,
    ];
    let text = lines.join("\n");
    ("the numbers are no longer written on the screen: the box covered the last group on the lesson list and the human could not press it, 2026-09-28, and the readings reach the developer by themselves anyway (below). A small dot in the corner is left to say the readings are being sent");
    box.textContent = "•";
    ("each reading that differs from the last is also sent to the dev server, which files it (",
      fn_name("viewport_readout_record"),
      "), so the numbers reach the developer without a picture of them. A failed send is dropped: this page only exists to be read, and it keeps showing the numbers either way");
    if (equal(text, state.sent)) {
      return;
    }
    state.sent = text;
    ("the time is added only to what is sent, never to what is compared, because it differs every tick - compared, it sent a reading four times a second and the page never went quiet");
    let v2 = lines.concat([
      "page time " + round(n2),
      "agent " + navigator.userAgent,
    ]);
    let body = json_to({
      f_name: fn_name("viewport_readout_record"),
      args: [v2],
    });
    function lambda() {
      return null;
    }
    let a = server_url_api();
    fetch(a, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body,
    }).catch(lambda);
  }
  state = {
    bars: [bar],
    update,
  };
  window.html_viewport_readout_state = state;
  window.addEventListener("scroll", update);
  window.addEventListener("resize", update);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("scroll", update);
    window.visualViewport.addEventListener("resize", update);
  }
  ("read again four times a second as well, because a bar is measured the moment it is made - before anything is put in it - and a page that has only been drawn, not scrolled, would otherwise show the empty bar");
  setInterval(update, 250);
  update();
}
