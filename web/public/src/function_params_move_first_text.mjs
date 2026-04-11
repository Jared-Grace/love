import { text_split_comma_dot_each_async } from "../../../love/public/src/text_split_comma_dot_each_async.mjs";
import { function_params_move_first_curried_right } from "../../../love/public/src/function_params_move_first_curried_right.mjs";
export async function function_params_move_first_text(
  f_names_comma,
  param_names,
) {
  let lambda = await function_params_move_first_curried_right(param_names);
  await text_split_comma_dot_each_async(f_names_comma, lambda);
}
