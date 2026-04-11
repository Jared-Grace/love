import { function_params_move_first_text } from "../../../love/public/src/function_params_move_first_text.mjs";
import { text_split_comma_dot_reverse } from "../../../love/public/src/text_split_comma_dot_reverse.mjs";
export async function function_param_move_first_multiple(
  f_names_comma,
  param_names_comma,
) {
  let param_names = text_split_comma_dot_reverse(param_names_comma);
  await function_params_move_first_text(f_names_comma, param_names);
}
