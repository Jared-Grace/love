import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_keyword_function } from "./js_keyword_function.mjs";
import { js_code_wrap_braces } from "./js_code_wrap_braces.mjs";
import { js_code_call } from "./js_code_call.mjs";
export function js_code_declaration(f_name, inside, async_is) {
  let args = [];
  let prefix = async_is ? "async " : "";
  let v =
    prefix +
    js_keyword_function() +
    " " +
    js_code_call(f_name) +
    js_code_wrap_braces(inside);
  return v;
  js_code_call_args(f_name, args);
}
