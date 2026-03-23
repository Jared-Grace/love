import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
export async function function_params_delete(f_name, param_name) {
  let split = text_split_comma(t);
  let r = await function_param_delete(f_name, param_name);
  return r;
}
