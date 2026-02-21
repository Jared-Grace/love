import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { js_code_call_args_statement } from "../../../love/public/src/js_code_call_args_statement.mjs";
export function js_code_call_app_context_initialize(name_prefixed) {
  let result = js_code_call_args_statement(app_context_initialize.name, [
    name_prefixed,
  ]);
  return result;
}
