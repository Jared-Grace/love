import { function_param_move_first_curried_right } from "./function_param_move_first_curried_right.mjs";
import { text_split_comma_dot_each_async } from "./text_split_comma_dot_each_async.mjs";
import { text_split_comma_size_1_assert } from "./text_split_comma_size_1_assert.mjs";
import { functions_param_new_multiple_error } from "./functions_param_new_multiple_error.mjs";
export async function functions_param_new_multiple_error_first(
  f_names_comma,
  param_name,
) {
  text_split_comma_size_1_assert(param_name);
  let r = await functions_param_new_multiple_error(f_names_comma, param_name);
  let lambda = function_param_move_first_curried_right(param_name);
  await text_split_comma_dot_each_async(f_names_comma, lambda);
  return r;
}
