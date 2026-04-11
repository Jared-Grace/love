import { function_params_move_first_curried_right } from "../../../love/public/src/function_params_move_first_curried_right.mjs";
import { text_split_comma_dot_each_async } from "../../../love/public/src/text_split_comma_dot_each_async.mjs";
import { text_split_comma_dot_reverse } from "../../../love/public/src/text_split_comma_dot_reverse.mjs";
export async function function_param_move_first_multiple(
  f_names_comma,
  param_names_comma,
) {
  let param_names = text_split_comma_dot_reverse(param_names_comma);
  let lambda = await function_params_move_first_curried_right(param_names);
  await text_split_comma_dot_each_async(f_names_comma, lambda);
}
