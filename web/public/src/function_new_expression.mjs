import { js_flo_body_add_return_argument_curried_right } from "../../../love/public/src/js_flo_body_add_return_argument_curried_right.mjs";
import { function_new_open_transform } from "../../../love/public/src/function_new_open_transform.mjs";
export async function function_new_expression(expression, f_name) {
  let lambda = js_flo_body_add_return_argument_curried_right(expression);
  let output = await function_new_open_transform(f_name, lambda);
}
