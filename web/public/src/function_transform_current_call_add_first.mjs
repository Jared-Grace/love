import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { function_transform_current_fn } from "../../../love/public/src/function_transform_current_fn.mjs";
export async function function_transform_current_call_add_first(code_argument) {
  let expression = js_parse_expression(code_argument);
  let r2 = js_flo_body_add_first_curried_right(expression);
  let r = await function_transform_current_fn(() => {});
  return r;
}
