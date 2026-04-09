import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
export async function function_param_move_first_curried(f_name) {
  return async function function_param_move_first_curried_result(param_name) {
    return await function_param_move_first(f_name, param_name);
  };
}
