import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
export async function function_param_new_first(
  f_name,
  param_name,
  values_default_comma,
) {
  await function_params_new(f_name, param_name, values_default_comma);
  await function_param_move_first(f_name, param_name);
}
