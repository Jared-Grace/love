import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
export function js_assign_default() {
  let code = js_code_assign("a", "a");
  let expression = js_parse_expression(code);
  return expression;
}
