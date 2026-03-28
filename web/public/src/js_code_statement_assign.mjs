import { js_code_semicolon } from "../../../love/public/src/js_code_semicolon.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
export function js_code_statement_assign(kind, left, right) {
  let r = kind + " " + js_code_assign(left, right) + " " + js_code_semicolon();
  return r;
}
