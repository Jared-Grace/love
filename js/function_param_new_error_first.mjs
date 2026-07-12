import { function_param_move_first } from "./function_param_move_first.mjs";
import { function_param_new_error } from "./function_param_new_error.mjs";
export async function function_param_new_error_first(f_name, param_name) {
  let v = await function_param_new_error(f_name, param_name);
  await function_param_move_first(f_name, param_name);
  return v;
}
