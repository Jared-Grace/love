import { not } from "./not.mjs";
import { property_name_internal_not_assert } from "./property_name_internal_not_assert.mjs";
import { multiply_round } from "./multiply_round.mjs";
import { divide } from "./divide.mjs";
import { html_viewport_readout_update } from "./html_viewport_readout_update.mjs";
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
    property_name_internal_not_assert(unit);
    probes[unit] = probe;
  }
  ("A RENAME BROKE BOTH OF THE PLACES A NUMBER IS ROUNDED HERE, and nothing said so, because this only runs when the address asks for it. One left Math.round_to, which is nothing, so the first reading threw before the box was ever written; the other renamed every read of a record's field to each_one while leaving the field itself called each, so the widest things on the page came out undefined. Found 2026-10-03 by reading the body rather than by running it - a readout nobody can see failing is the one place a crash waits longest.");
  function round_to(n) {
    let top2 = multiply_round(n, 10);
    let divided = divide(top2, 10);
    return divided;
  }
  function update() {
    let r = html_viewport_readout_update(state, round_to, probes, box);
    return r;
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
