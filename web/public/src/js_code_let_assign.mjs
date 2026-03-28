import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
export function js_code_let_assign(left, right) {
  let code_assign =
    js_keyword_let() + " " + js_code_assign(left, right) + js_code_semicolon();
  return code_assign;
  let v2 = js_code_semicolon();
}
