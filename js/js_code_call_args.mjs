import { js_code_join_comma_space } from "./js_code_join_comma_space.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_code_wrap_parenthesis } from "./js_code_wrap_parenthesis.mjs";
import { text_combine } from "./text_combine.mjs";
export function js_code_call_args(fn_name, args) {
  arguments_assert(arguments, 2);
  let joined = js_code_join_comma_space(args);
  let right = js_code_wrap_parenthesis(joined);
  let code = text_combine(fn_name, right);
  return code;
}
