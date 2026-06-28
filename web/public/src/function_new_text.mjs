import { function_new_open_transform } from "../../../love/public/src/function_new_open_transform.mjs";
import { js_flo_body_add_return_argument } from "../../../portfolio_qa/public/src/js_flo_body_add_return_argument.mjs";
import { js_expression_string } from "../../../love/public/src/js_expression_string.mjs";
export async function function_new_text(text, f_name) {
  async function lambda(ast) {
    let e = js_expression_string(text);
    js_flo_body_add_return_argument(ast, e);
  }
  let output = await function_new_open_transform(f_name, lambda);
}
