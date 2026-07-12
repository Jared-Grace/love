import { text_is_assert } from "./text_is_assert.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { function_param_delete_curried } from "./function_param_delete_curried.mjs";
import { each_async } from "./each_async.mjs";
export async function function_params_delete(f_name, param_names_comma) {
  text_is_assert(param_names_comma);
  let param_names = text_split_comma_dot(param_names_comma);
  let c = await function_param_delete_curried(f_name);
  await each_async(param_names, c);
}
