import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
export async function functions_param_delete_generic(
  f_names_comma,
  param_name,
  fn,
) {
  let f_names = text_split_comma(f_names_comma);
  async function lambda(f_name) {
    let v2 = await function_current_set(f_name);
    let v = await fn(f_name, param_name);
  }
  await each_async(f_names, lambda);
}
