import { html_cycle_code_bold } from "./html_cycle_code_bold.mjs";
import { html_div } from "./html_div.mjs";
export function html_div_cycle_code_bold(parent, parts) {
  let div = html_div(parent);
  html_cycle_code_bold(div, parts);
}
