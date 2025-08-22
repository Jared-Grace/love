import { js_code_assign } from "./js_code_assign.mjs";
import { js_keyword_let } from "./js_keyword_let.mjs";
export function js_code_let_assign(left, right) {
  let v = js_keyword_let() + " " + js_code_assign(left, right) + ";";
  return v;
}
