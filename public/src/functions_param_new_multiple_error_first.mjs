import { text_split_comma_size_1_assert } from "../../../love/public/src/text_split_comma_size_1_assert.mjs";
import { functions_param_new_multiple_error } from "../../../love/public/src/functions_param_new_multiple_error.mjs";
export async function functions_param_new_multiple_error_first(
  f_names_comma,
  param_name,
) {
  text_split_comma_size_1_assert(param_name);
  let r = await functions_param_new_multiple_error(f_names_comma, param_name);
  return r;
}
