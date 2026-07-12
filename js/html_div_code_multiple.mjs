import { each } from "./each.mjs";
import { html_div_code } from "./html_div_code.mjs";
export function html_div_code_multiple(c, codes) {
  function lambda(code) {
    html_div_code(c, code);
  }
  each(codes, lambda);
}
