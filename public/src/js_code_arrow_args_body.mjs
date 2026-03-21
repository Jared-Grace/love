import { js_code_arrow_args_body_expression } from "../../../love/public/src/js_code_arrow_args_body_expression.mjs";
import { js_code_wrap_braces } from "../../../love/public/src/js_code_wrap_braces.mjs";
export function js_code_arrow_args_body(args, body) {
  let b = js_code_wrap_braces(body);
  const code = js_code_arrow_args_body_expression(args, b);
  return code;
}
