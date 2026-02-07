import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
import { function_param_new_double } from "../../../love/public/src/function_param_new_double.mjs";
export async function function_param_new_double_first(f_name, param_name) {
  await function_param_new_double(f_name, param_name);
  await function_param_move_first(f_name, param_name);
}
