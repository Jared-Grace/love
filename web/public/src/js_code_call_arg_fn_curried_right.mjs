import { js_code_call_arg_fn } from "../../../love/public/src/js_code_call_arg_fn.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function js_code_call_arg_fn_curried_right(arg_get) {
  let c = function js_code_call_arg_fn_curried_right_result(fn_name) {
    return js_code_call_arg_fn(fn_name, arg_get);
  };
  return c;
}
