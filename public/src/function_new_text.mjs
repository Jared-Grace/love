import { js_flo_body_add_return_argument_curried_right } from "../../../love/public/src/js_flo_body_add_return_argument_curried_right.mjs";
import { function_new_open_transform } from "../../../love/public/src/function_new_open_transform.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
export async function function_new_text(f_name, text) {
  let e = js_expression_string(text);
  let lambda = js_flo_body_add_return_argument_curried_right(e);
  let output = await function_new_open_transform(f_name, lambda);
}
