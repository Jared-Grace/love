import { function_curryify_specify_name_get_curried_right } from "../../../love/public/src/function_curryify_specify_name_get_curried_right.mjs";
import { function_curryify_specify_args_get_curried_right } from "../../../love/public/src/function_curryify_specify_args_get_curried_right.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_curryify_generic_open } from "../../../love/public/src/function_curryify_generic_open.mjs";
export async function function_curryify_specify(f_name, positions_comma) {
  let positions_1 = text_split_comma(positions_comma);
  let args_get = function_curryify_specify_args_get_curried_right(positions_1);
  let r2 = function_curryify_specify_name_get_curried_right(positions_1);
  let r = await function_curryify_generic_open(f_name, r2, args_get);
  return r;
}
