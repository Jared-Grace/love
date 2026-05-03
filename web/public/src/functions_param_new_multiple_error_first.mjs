import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { functions_param_new_multiple_error } from "../../../love/public/src/functions_param_new_multiple_error.mjs";
export async function functions_param_new_multiple_error_first(
  f_names_comma,
  param_names,
) {
  let split = text_split_comma(param_names);
  let r = await functions_param_new_multiple_error(f_names_comma, param_names);
  return r;
}
