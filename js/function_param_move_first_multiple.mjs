import { function_params_move_first_text } from "./function_params_move_first_text.mjs";
import { text_split_comma_dot_reverse } from "./text_split_comma_dot_reverse.mjs";
export async function function_param_move_first_multiple(
  f_names_comma,
  param_names_comma,
) {
  "Moves named parameters to the front of several functions at once, so a shared argument order can be settled in one command instead of function by function.";
  let param_names = text_split_comma_dot_reverse(param_names_comma);
  await function_params_move_first_text(f_names_comma, param_names);
}
