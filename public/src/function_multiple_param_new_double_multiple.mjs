import { string_split_comma } from "../../../love/public/src/string_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_multiple_param_new_double } from "../../../love/public/src/function_multiple_param_new_double.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_multiple_param_new_double_multiple(
  f_names_comma,
  param_names,
) {
  let split = string_split_comma(f_names);
  async function lambda(item) {
    let v = await function_multiple_param_new_double(f_names_comma, param_name);
    return v;
  }
  await each_async(list, lambda);
  marker("1");
}
