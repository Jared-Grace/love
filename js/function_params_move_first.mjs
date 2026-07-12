import { each_async } from "./each_async.mjs";
import { function_param_move_first_curried } from "./function_param_move_first_curried.mjs";
export async function function_params_move_first(f_name, param_names) {
  let r = await function_param_move_first_curried(f_name);
  await each_async(param_names, r);
}
