import { function_curryify_choose } from "../../../love/public/src/function_curryify_choose.mjs";
export async function function_curryify_right(f_name) {
    let args_get = function_curryify_choose_args_get(0);
    let output = await function_curryify_generic(
      f_name,
      args_get,
      function_curryify_generic_name,
    );
    return output;
}
