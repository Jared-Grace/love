import { text_split_comma_dot_reverse } from "../../../love/public/src/text_split_comma_dot_reverse.mjs";
import { function_param_move_first_curried } from "../../../love/public/src/function_param_move_first_curried.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function function_param_move_first_multiple(
  f_names_comma,
  param_names_comma,
) {
  let param_names = text_split_comma_dot_reverse(param_names_comma);
  let f_names = text_split_comma_dot(f_names_comma);
  await each_async(f_names, lambda);
  async function lambda(f_name) {
    let r2 = await function_param_move_first_curried(f_name);
    await each_async(param_names, r2);
  }
}
