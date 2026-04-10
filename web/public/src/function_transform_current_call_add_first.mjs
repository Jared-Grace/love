import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_flo_body_add_return_argument_curried_right } from "../../../love/public/src/js_flo_body_add_return_argument_curried_right.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_call_add_first(code_argument) {
  let expression = js_parse_expression(code_argument);
  let r2 = js_flo_body_add_return_argument_curried_right(expression);
  let r = await function_transform_current_fn(r2);
  return r;
}
