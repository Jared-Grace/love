import { functions_param_new } from "../../../love/public/src/functions_param_new.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function functions_param_new_multiple(
  f_names_comma,
  param_names,
  default_value,
) {
  let split = text_split_comma(param_names);
  async function lambda(param_name) {
    let v = await functions_param_new(f_names_comma, param_name, default_value);
    return v;
  }
  await each_async(split, lambda);
}
