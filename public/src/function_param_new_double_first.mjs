import { error } from "../../../love/public/src/error.mjs";
import { function_param_new_double } from "../../../love/public/src/function_param_new_double.mjs";
export async function function_param_new_double_first(param_name) {
  let f_name = error();
  let v = await function_param_new_double(f_name, param_name);
  return v;
}
