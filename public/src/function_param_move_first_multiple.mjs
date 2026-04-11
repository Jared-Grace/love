import { function_params_move_first_curried_right } from "../../../love/public/src/function_params_move_first_curried_right.mjs";
import { function_params_move_first } from "../../../love/public/src/function_params_move_first.mjs";
import { text_split_comma_dot_each_async } from "../../../love/public/src/text_split_comma_dot_each_async.mjs";
import { text_split_comma_dot_reverse } from "../../../love/public/src/text_split_comma_dot_reverse.mjs";
export async function function_param_move_first_multiple(
  f_names_comma,
  param_names_comma,
) {
  let param_names = text_split_comma_dot_reverse(param_names_comma);
  let r2 = await function_params_move_first_curried_right(param_names2);
  await text_split_comma_dot_each_async(f_names_comma, lambda);
  async function lambda(f_name) {
    await function_params_move_first(f_name, param_names);
  }
}
