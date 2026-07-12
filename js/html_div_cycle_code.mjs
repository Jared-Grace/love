import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_cycle_code(parent, parts) {
  let div = html_div(parent);
  html_cycle_code(div, parts);
  return div;
}
