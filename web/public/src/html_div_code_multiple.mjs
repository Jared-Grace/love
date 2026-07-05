import { each } from "../../../love/public/src/each.mjs";
import { html_div_code } from "../../../love/public/src/html_div_code.mjs";
export function html_div_code_multiple(c2, codes) {
  function lambda(code) {
    html_div_code(c2, code);
  }
  each(codes, lambda);
}
