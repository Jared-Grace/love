import { fn_name } from "./fn_name.mjs";
import { js_code_call } from "./js_code_call.mjs";
export function function_param_new_error_value_default() {
  let result = js_code_call(fn_name("error"));
  return result;
}
