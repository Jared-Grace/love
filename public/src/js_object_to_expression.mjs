import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function js_object_to_expression(object) {
  let json = json_to(object);
  let code_assign = js_code_let_assign(left, right);
  let expression = js_parse_expression(json);
  return expression;
}
