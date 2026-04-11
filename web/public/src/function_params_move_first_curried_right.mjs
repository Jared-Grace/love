import { function_params_move_first } from "../../../love/public/src/function_params_move_first.mjs";
export async function function_params_move_first_curried_right(param_names) {
  let r2 = async function function_params_move_first_curried_right_result(
    f_name,
  ) {
    let r = await function_params_move_first(f_name, param_names);
    return r;
  };
  return r2;
}
