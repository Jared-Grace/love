import { function_curryify_specify_args_get_curried_right } from "../../../love/public/src/function_curryify_specify_args_get_curried_right.mjs";
import { function_name_combine_multiple_concat } from "../../../love/public/src/function_name_combine_multiple_concat.mjs";
import { function_curryify_specify_name } from "../../../love/public/src/function_curryify_specify_name.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_curryify_generic_open } from "../../../love/public/src/function_curryify_generic_open.mjs";
export async function function_curryify_specify(f_name, positions_comma) {
  let positions = text_split_comma(positions_comma);
  let args_get = function_curryify_specify_args_get_curried_right(positions);
  function name_get(unaliased) {
    let n = function_curryify_specify_name(unaliased);
    const parts = [n];
    let combined = function_name_combine_multiple_concat(parts, positions);
    return combined;
  }
  let r = await function_curryify_generic_open(f_name, name_get, args_get);
  return r;
}
