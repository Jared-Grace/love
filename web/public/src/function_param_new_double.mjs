import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new_double(param_name, f_name) {
  await function_params_new(f_name, param_name, param_name);
}
