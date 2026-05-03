import { list_size_1_assert } from "../../../love/public/src/list_size_1_assert.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { functions_param_new_multiple_error } from "../../../love/public/src/functions_param_new_multiple_error.mjs";
export async function functions_param_new_multiple_error_first(
  f_names_comma,
  param_names,
) {
  let split = text_split_comma(param_names);
  list_size_1_assert(list);
  let r = await functions_param_new_multiple_error(f_names_comma, param_names);
  return r;
}
