import { function_new_transform } from "./function_new_transform.mjs";
import { js_flo_body_add_return_argument_curried_right } from "./js_flo_body_add_return_argument_curried_right.mjs";
export async function function_new_expression(f_name, expression) {
  let lambda = js_flo_body_add_return_argument_curried_right(expression);
  let r = await function_new_transform(f_name, lambda);
  return r;
}
