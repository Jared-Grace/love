import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
import { error } from "./error.mjs";
export async function function_param_new_error(f_name, param_name) {
  let values_default_comma = js_code_call(error.name);
  await function_params_new(f_name, param_name, values_default_comma);
}
