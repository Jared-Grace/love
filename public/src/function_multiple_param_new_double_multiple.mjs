import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_multiple_param_new_double } from "../../../love/public/src/function_multiple_param_new_double.mjs";
export async function function_multiple_param_new_double_multiple(
  f_names_comma,
  param_names,
) {
  let split = text_split_comma(param_names);
  async function lambda(param_name) {
    let v = await function_multiple_param_new_double(f_names_comma, param_name);
    return v;
  }
  await each_async(split, lambda);
}
