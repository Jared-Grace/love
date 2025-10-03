import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new(param_name, default_value) {
  marker("1");
  await function_params_new(param_name, default_value);
}
