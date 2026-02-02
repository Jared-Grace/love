import { js_code_call } from "../../../love/public/src/js_code_call.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
import { error } from "./error.mjs";
export async function function_param_new_error(param_name) {
  marker("1");
  let values_default_comma = js_code_call(error.name);
  let f_name = error();
  await function_params_new(param_name, values_default_comma, f_name);
}
