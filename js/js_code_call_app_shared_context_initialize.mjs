import { fn_name } from "./fn_name.mjs";
import { js_code_call_args_statement } from "./js_code_call_args_statement.mjs";
export function js_code_call_app_shared_context_initialize(name_prefixed) {
  let result = js_code_call_args_statement(
    fn_name("app_shared_context_initialize"),
    [name_prefixed],
  );
  return result;
}
