import { html_viewport_readout_scroll_box } from "./html_viewport_readout_scroll_box.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
export function html_viewport_readout_update_box(
  bars,
  round_to,
  probes,
  viewport,
  box,
) {
  arguments_assert(arguments, 5);
  let screen_width = window.screen.width;
  let reaching = [];
  for (let each_one of document.body.querySelectorAll("*")) {
    let right = each_one.getBoundingClientRect().right;
    if (greater_than(right, screen_width)) {
      reaching.push({
        right,
        each_one,
      });
    }
  }
  function lambda2(a_inner, b_inner) {
    let difference = subtract(b_inner.right, a_inner.right);
    return difference;
  }
  reaching.sort(lambda2);
  bars.push("screen width " + screen_width);
  for (let item of reaching.slice(0, 5)) {
    bars.push(
      "  wide " +
        item.each_one.tagName +
        " right " +
        round_to(item.right) +
        " width " +
        round_to(item.each_one.getBoundingClientRect().width) +
        " " +
        item.each_one.textContent.slice(0, 40),
    );
  }
  let v = bars.join("\n");
  let n = performance.now();
  let r2 = html_viewport_readout_scroll_box(round_to);
  let lines = [
    "innerHeight " + window.innerHeight,
    "clientHeight " + document.documentElement.clientHeight,
    "dvh " + round_to(probes.dvh.getBoundingClientRect().height),
    "svh " + round_to(probes.svh.getBoundingClientRect().height),
    "lvh " + round_to(probes.lvh.getBoundingClientRect().height),
    "vv height " + (viewport ? round_to(viewport.height) : "none"),
    "vv offsetTop " + (viewport ? round_to(viewport.offsetTop) : "none"),
    "vv scale " + (viewport ? round_to(viewport.scale) : "none"),
    "scrollY " + round_to(window.scrollY),
    "page height " + round_to(document.documentElement.scrollHeight),
    r2,
    v,
    "dpr " + round_to(window.devicePixelRatio),
    "innerWidth " + window.innerWidth,
  ];
  let text = lines.join("\n");
  ("the numbers are no longer written on the screen: the box covered the last group on the lesson list and the human could not press it, 2026-09-28, and the readings reach the developer by themselves anyway (below). A small dot in the corner is left to say the readings are being sent");
  box.textContent = "•";
  let r = {
    n,
    lines,
    text,
  };
  return r;
}
