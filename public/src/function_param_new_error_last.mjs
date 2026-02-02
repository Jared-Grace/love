import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
import { function_param_new_error } from "../../../love/public/src/function_param_new_error.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_param_new_error_last(f_name, param_name) {
  marker("1");
  let v = await function_param_new_error(f_name, param_name);
  await function_param_move_first(f_name, param_name);
  return v;
}
