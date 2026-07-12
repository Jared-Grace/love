import { global_name } from "./global_name.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_code_braces_empty } from "./js_code_braces_empty.mjs";
export function js_code_global_init() {
  let right = js_code_braces_empty();
  let left = global_name();
  let code_assign = js_code_let_assign(left, right);
  return code_assign;
}
