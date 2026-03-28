import { js_code_statement_assign } from "../../../love/public/src/js_code_statement_assign.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
export function js_code_let_assign(left, right) {
  const kind = js_keyword_let();
  let code_assign = js_code_statement_assign(kind, left, right);
  return code_assign;
}
