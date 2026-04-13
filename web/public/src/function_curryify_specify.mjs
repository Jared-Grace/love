import { function_curryify_specify_name_get } from "../../../love/public/src/function_curryify_specify_name_get.mjs";
import { function_curryify_specify_args_get_curried_right } from "../../../love/public/src/function_curryify_specify_args_get_curried_right.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_curryify_generic_open } from "../../../love/public/src/function_curryify_generic_open.mjs";
export async function function_curryify_specify(f_name, positions_comma) {
  let positions_1 = text_split_comma(positions_comma);
  let args_get = function_curryify_specify_args_get_curried_right(positions_1);
  function name_get(unaliased) {
    let combined = function_curryify_specify_name_get(unaliased, positions_1);
    return combined;
  }
  let r = await function_curryify_generic_open(f_name, name_get, args_get);
  return r;
}
