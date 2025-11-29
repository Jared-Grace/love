import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_current_set } from "../../../love/public/src/function_current_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
export async function function_multiple_param_delete_generic(
  f_names_comma,
  param_name,
  fn,
) {
  let f_names = string_split_comma(f_names_comma);
  marker("1");
  async function lambda(f_name) {
    let v2 = await function_current_set(f_name);
    let v = await fn(param_name);
  }
  await each_async(f_names, lambda);
}
