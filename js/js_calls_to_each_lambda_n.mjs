import { arguments_assert } from "./arguments_assert.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_calls_to_each_lambda_n(call) {
  arguments_assert(arguments, 1);
  let name = js_call_callee_name_try(call);
  let n = null_is(name);
  let r = {
    name,
    n,
  };
  return r;
}
