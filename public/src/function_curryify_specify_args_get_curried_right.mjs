import { function_curryify_specify_args_get } from "../../../love/public/src/function_curryify_specify_args_get.mjs";
export function function_curryify_specify_args_get_curried_right(positions) {
  let r = function function_curryify_specify_args_get_curried_right_result(
    arg_names,
  ) {
    let difference = function_curryify_specify_args_get(arg_names, positions);
    return difference;
  };
  return r;
}
