import { html_connected_is } from "./html_connected_is.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_loading_spinner_scale_random } from "./html_loading_spinner_scale_random.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_loading_spinner_pulse(pulse, milliseconds, expanded) {
  "breathe the outer ring in and out forever, drawing a fresh radius for every half-breath, so no two expansions are the same size. a css keyframe cannot do this — its two ends are fixed for all time — so each size is set from here and the css transition smooths the move. the loop ends by itself once the overlay is removed from the page";
  let connected = html_connected_is(pulse);
  if (not(connected)) {
    return;
  }
  let scale = html_loading_spinner_scale_random(expanded);
  let left = text_combine("scale(", scale);
  let style_value = text_combine(left, ")");
  html_style_set(pulse, "transform", style_value);
  function next() {
    let expanded2 = not(expanded);
    html_loading_spinner_pulse(pulse, milliseconds, expanded2);
  }
  setTimeout(next, milliseconds);
}
