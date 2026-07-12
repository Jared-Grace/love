import { html_cycle_bold } from "./html_cycle_bold.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_cycle_bold(c, parts) {
  let div = html_div(c);
  html_cycle_bold(div, parts);
}
