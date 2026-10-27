import { each } from "./each.mjs";
import { app_code_div_code } from "./app_code_div_code.mjs";
export function app_code_div_code_multiple(c, codes) {
  function lambda(code) {
    app_code_div_code(c, code);
  }
  each(codes, lambda);
}
