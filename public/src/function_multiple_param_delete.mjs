import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_param_delete } from "../../../love/public/src/function_param_delete.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_param_delete(
  f_names_comma,
  param_name,
) {
  let fn = function_param_delete;
  let f_names = string_split_comma(f_names_comma);
  marker("1");
  async function lambda(f_name) {
    let v2 = await function_current_set(f_name);
    let v = await function_param_delete(param_name);
  }
  await each_async(f_names, lambda);
  return v;
}
