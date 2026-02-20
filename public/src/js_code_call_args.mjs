import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
export function js_code_call_args(fn_name, args) {
  arguments_assert(arguments, 2);
  let joined = list_join_comma_space(args);
  let code = fn_name + js_code_wrap_parenthesis(joined);
  return code;
}
