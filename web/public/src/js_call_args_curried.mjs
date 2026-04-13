import { js_call_args_code } from "../../../love/public/src/js_call_args_code.mjs";
export function js_call_args_curried(f_name) {
  let r = function js_call_args_curried_result(args_code) {
    let parsed = js_call_args_code(f_name, args_code);
    return parsed;
  };
  return r;
}
