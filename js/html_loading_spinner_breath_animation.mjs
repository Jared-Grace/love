import { text_combine_3 } from "./text_combine_3.mjs";
import { html_loading_spinner_breath_name } from "./html_loading_spinner_breath_name.mjs";
import { html_loading_spinner_breath_halves } from "./html_loading_spinner_breath_halves.mjs";
import { text_combine } from "./text_combine.mjs";
export function html_loading_spinner_breath_animation() {
  "how the outer ring plays its breathing: one round, one second per half-breath, easing at both ends, over and over";
  let name = html_loading_spinner_breath_name();
  let seconds = html_loading_spinner_breath_halves();
  let left2 = text_combine_3(name, " ", seconds);
  let r = text_combine(left2, "s ease-in-out infinite");
  return r;
}
