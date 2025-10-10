import { js_declare } from "../../../love/public/src/js_declare.mjs";
import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_dot } from "../../../love/public/src/js_code_dot.mjs";
export function app_new_assign(combined) {
  const v = "f_name";
  let code = js_code_dot(combined, "name");
  let expression = js_parse_expression(code);
  let assign = js_declare(v, expression);
  return assign;
}
