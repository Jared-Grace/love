import { invoke_count_arg } from "../../../love/public/src/invoke_count_arg.mjs";
export function invoke_count_arg_curried(fn) {
  let r2 = function invoke_count_arg_curried_result(arg, count) {
    let r = invoke_count_arg(fn, arg, count);
    return r;
  };
  return r2;
}
