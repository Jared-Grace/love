import { html_cycle_mono } from "../../../love/public/src/html_cycle_mono.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function html_div_cycle_mono(c, parts) {
  let div = html_div(c);
  html_cycle_mono(div, parts);
}
