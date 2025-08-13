import { js_keyword_let } from "./js_keyword_let.mjs";
export function js_code_let_assign(unique, code) {
  return js_keyword_let() + " " + unique + " = " + code + ";";
}
