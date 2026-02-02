import { error } from "../../../love/public/src/error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new_double(param_name) {
  marker("1");
  let f_name = error();
  await function_params_new(param_name, param_name, f_name);
}
