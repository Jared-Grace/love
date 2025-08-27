import {js_code_wrap_braces} from "./js_code_wrap_braces.mjs";
import {js_code_call_args} from "./js_code_call_args.mjs";
import {js_keyword_function} from "./js_keyword_function.mjs";
export function js_code_declaration_args(async_is, f_name, args, inside) {
  let prefix = async_is ? "async " : "";
  let code = prefix + js_keyword_function() + " " + js_code_call_args(f_name, args) + js_code_wrap_braces(inside);
  return code;
}
