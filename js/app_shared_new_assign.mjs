import { js_expression_fn_name } from "./js_expression_fn_name.mjs";
import { js_declare } from "./js_declare.mjs";
export function app_shared_new_assign(combined) {
  let v = "f_name";
  let expression = js_expression_fn_name(combined);
  let assign = js_declare(v, expression);
  return assign;
}
