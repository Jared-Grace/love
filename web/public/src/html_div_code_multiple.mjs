import { each } from "../../../love/public/src/each.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
export function html_div_code_multiple(c, codes) {
  function lambda(code) {
    html_div_code(c, code);
  }
  each(codes, lambda);
}
