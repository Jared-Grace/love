import { function_curryify_choose_args_get } from "../../../love/public/src/function_curryify_choose_args_get.mjs";
import { function_curryify_generic_name } from "../../../love/public/src/function_curryify_generic_name.mjs";
import { integer_to } from "../../../love/public/src/integer_to.mjs";
import { function_curryify_generic } from "../../../love/public/src/function_curryify_generic.mjs";
export async function function_curryify_choose(f_name, index_text) {
  let index = integer_to(index_text);
  let args_get = function_curryify_choose_args_get(index);
  let output = await function_curryify_generic(
    f_name,
    args_get,
    function_curryify_generic_name,
  );
  return output;
}
