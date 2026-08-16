import { js_await_if_unwrap } from "./js_await_if_unwrap.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
export function js_expression_call_only(expression) {
  "The one call this expression amounts to, whether or not it waits for the answer, or nothing when it is not a call.";
  "A function that waits for the answer of the one call it makes hands back the same answer the call hands back, so the waiting sits outside the call and can be read past.";
  let unwrapped = js_await_if_unwrap(expression);
  let argument = property_get(unwrapped, "argument");
  let call_is = js_node_type_is(argument, "CallExpression");
  if (not(call_is)) {
    return null;
  }
  return argument;
}
