import { error } from "../../../love/public/src/error.mjs";
import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
export function function_param_new_error_value_default() {
  let result = js_code_call(error.name);
  return result;
}
