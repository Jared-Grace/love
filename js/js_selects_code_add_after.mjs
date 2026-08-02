import { js_selects_code_add_generic } from "./js_selects_code_add_generic.mjs";
export function js_selects_code_add_after(ast, selects, code) {
  "Lands the written line on the line under the chosen statement";
  let index_delta = 1;
  js_selects_code_add_generic(ast, selects, code, index_delta);
}
