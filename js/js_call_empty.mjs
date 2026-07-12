import { js_call_args_from_code } from "./js_call_args_from_code.mjs";
export function js_call_empty(f_name_new) {
  let c = js_call_args_from_code(f_name_new, []);
  return c;
}
