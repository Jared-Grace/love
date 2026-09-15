import { app_code_operator_code_called } from "./app_code_operator_code_called.mjs";
import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function js_code_call_args(f_name, args) {
  arguments_assert(arguments, 2);
  let joined = js_code_join_comma_space(args);
  let code = app_code_operator_code_called(f_name, joined);
  return code;
}
