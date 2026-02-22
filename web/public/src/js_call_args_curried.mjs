import { js_call_args } from "../../../love/public/src/js_call_args.mjs";
export function js_call_args_curried(f_name) {
  let r = function js_call_args_curried_result(args_code) {
    let parsed = js_call_args(f_name, args_code);
    return parsed;
  };
  return r;
}
