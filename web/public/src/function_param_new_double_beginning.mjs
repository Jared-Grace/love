import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
import { function_param_new_double } from "../../../love/public/src/function_param_new_double.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_param_new_double_beginning(param_name) {
  marker("1");
  let v = await function_param_new_double(param_name);
  await function_param_move_first(param_name2);
  return v;
}
