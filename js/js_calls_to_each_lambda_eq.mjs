import { arguments_assert } from "./arguments_assert.mjs";
import { js_calls_to_each_lambda_lambda6 } from "./js_calls_to_each_lambda_lambda6.mjs";
import { equal_by } from "./equal_by.mjs";
export function js_calls_to_each_lambda_eq(name, call, call2) {
  arguments_assert(arguments, 3);
  function lambda6(c) {
    let r = js_calls_to_each_lambda_lambda6(c, name);
    return r;
  }
  let eq = equal_by(call, call2, lambda6);
  return eq;
}
