import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
export function js_call_args_code(f_name, args_list_code) {
  let code = js_code_call_args(f_name, args_list_code);
  let c = js_parse_expression(code);
  return c;
}
