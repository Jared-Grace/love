import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
import { function_curryify_choose_args_get } from "../../../love/public/src/function_curryify_choose_args_get.mjs";
export async function function_curryify_right(f_name) {
  let unaliased = await function_name_unalias_only(name);
  let args_get = function_curryify_choose_args_get(0);
  let combined = function_curryify_generic_name(f_name);
  let combined2 = function_name_combine(combined, combined);
  let output = await function_curryify_generic(f_name, combined2, args_get);
  return output;
}
