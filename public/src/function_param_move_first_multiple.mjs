import { text_split_dot_comma } from "../../../love/public/src/text_split_dot_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_param_move_first } from "../../../love/public/src/function_param_move_first.mjs";
export async function function_param_move_first_multiple(
  f_name,
  param_names_comma,
) {
  let param_names = text_split_dot_comma(param_names_comma);
  async function lambda(param_name) {
    await function_param_move_first(f_name, param_names);
  }
  await each_async(param_names, lambda);
}
