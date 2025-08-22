import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function js_code_call_args(fn_name, args) {
  let joined = list_join_comma_space(args);
  let v = fn_name + js_code_wrap_parenthesis(joined);
  return v;
}
