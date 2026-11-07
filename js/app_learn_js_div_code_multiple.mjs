import { each } from "./each.mjs";
import { app_learn_js_div_code } from "./app_learn_js_div_code.mjs";
export function app_learn_js_div_code_multiple(c, codes) {
  function lambda(code) {
    app_learn_js_div_code(c, code);
  }
  each(codes, lambda);
}
