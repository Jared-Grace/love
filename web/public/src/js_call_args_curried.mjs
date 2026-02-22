import { js_call_args } from "../../../love/public/src/js_call_args.mjs";
export function js_call_args_curried(f_name) {
  return function js_call_args_curried_result(args_code) {
    return js_call_args(f_name, args_code);
  };
}
