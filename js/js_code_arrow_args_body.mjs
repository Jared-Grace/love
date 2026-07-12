import { js_code_arrow_args_body_expression } from "./js_code_arrow_args_body_expression.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
export function js_code_arrow_args_body(args, body) {
  let b = js_code_wrap_braces(body);
  let code = js_code_arrow_args_body_expression(args, b);
  return code;
}
