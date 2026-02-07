import { error } from "../../../love/public/src/error.mjs";
import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
import { function_param_new_double } from "../../../love/public/src/function_param_new_double.mjs";
export async function function_param_new_double_beginning(param_name) {
  let f_name2 = error();
  let v = await function_param_new_double(param_name, f_name2);
  let f_name = error();
  await function_param_move_first(f_name, param_name);
  return v;
}
