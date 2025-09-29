import { marker } from "./marker.mjs";
import { function_params_new } from "./function_params_new.mjs";
export async function function_param_new_double(param_name, ast) {
  marker("1");
  await function_params_new(param_name, param_name);
}
