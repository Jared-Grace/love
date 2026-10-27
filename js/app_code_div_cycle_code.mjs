import { app_code_cycle_code } from "./app_code_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_div_cycle_code(parent, parts) {
  let div = html_div(parent);
  app_code_cycle_code(div, parts);
  return div;
}
