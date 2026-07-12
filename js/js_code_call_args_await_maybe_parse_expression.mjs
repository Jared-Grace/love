import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_code_call_args_await_maybe } from "./js_code_call_args_await_maybe.mjs";
export function js_code_call_args_await_maybe_parse_expression(
  f_name_new,
  args_list_code,
  declaration,
) {
  let code = js_code_call_args_await_maybe(
    f_name_new,
    args_list_code,
    declaration,
  );
  let parsed = js_parse_expression(code);
  return parsed;
}
