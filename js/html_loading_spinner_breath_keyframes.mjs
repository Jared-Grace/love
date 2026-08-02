import { text_combine_3 } from "./text_combine_3.mjs";
import { html_loading_spinner_breath_scales } from "./html_loading_spinner_breath_scales.mjs";
import { html_loading_spinner_breath_halves } from "./html_loading_spinner_breath_halves.mjs";
import { html_loading_spinner_breath_name } from "./html_loading_spinner_breath_name.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function html_loading_spinner_breath_keyframes() {
  "the css that breathes the outer ring: every half-breath of the round becomes one keyframe stop, evenly spaced. the browser plays this on its own, so the ring keeps breathing even while the page is busy loading — which is the only time the spinner is ever on screen";
  let scales = html_loading_spinner_breath_scales();
  let halves = html_loading_spinner_breath_halves();
  function stop(scale, index) {
    let fraction = divide(index, halves);
    let percent = multiply(fraction, 100);
    let left2 = text_combine_3("  ", percent, "% { transform: scale(");
    let line = text_combine_3(left2, scale, "); }");
    return line;
  }
  let lines = list_map_index(scales, stop);
  let body = list_join_newline(lines);
  let name = html_loading_spinner_breath_name();
  let head2 = text_combine_3("@keyframes ", name, " {\n");
  let r = text_combine_3(head2, body, "\n}");
  return r;
}
