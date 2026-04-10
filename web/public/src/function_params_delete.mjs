import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { function_param_delete_curried } from "../../../love/public/src/function_param_delete_curried.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function function_params_delete(f_name, param_names_comma) {
  let param_names = text_split_comma_dot(param_names_comma);
  let r2 = await function_param_delete_curried(f_name);
  await each_async(param_names, r2);
}
