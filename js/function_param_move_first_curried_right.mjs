import { function_param_move_first } from "./function_param_move_first.mjs";
export function function_param_move_first_curried_right(param_name) {
  let c = async function function_param_move_first_curried_right_result(
    f_name,
  ) {
    let r = await function_param_move_first(f_name, param_name);
    return r;
  };
  return c;
}
