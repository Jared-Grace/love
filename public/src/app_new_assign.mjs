import { js_expression_fn_name } from "../../../love/public/src/js_expression_fn_name.mjs";
import { js_declare } from "../../../love/public/src/js_declare.mjs";
export function app_new_assign(combined) {
  const v = "f_name";
  let expression = js_expression_fn_name(combined);
  let assign = js_declare(v, expression);
  return assign;
}
