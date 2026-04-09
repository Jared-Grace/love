import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { function_param_move_first_curried } from "../../../love/public/src/function_param_move_first_curried.mjs";
import { text_split_dot_comma } from "../../../love/public/src/text_split_dot_comma.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function function_param_move_first_multiple(
  f_names_comma,
  param_names_comma,
) {
  let f_names = text_split_dot_comma(f_names_comma);
  let param_names = text_split_dot_comma(param_names_comma);
  list_reverse(param_names);
  let r2 = await function_param_move_first_curried(f_name);
  await each_async(param_names, r2);
}
