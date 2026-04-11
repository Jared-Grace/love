import { function_params_move_first } from "../../../love/public/src/function_params_move_first.mjs";
export async function function_params_move_first_curried_right(param_names) {
  return async function function_params_move_first_curried_right_result(
    f_name,
  ) {
    return await function_params_move_first(f_name, param_names);
  };
}
