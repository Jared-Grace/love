import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_return_argument_get } from "./js_return_argument_get.mjs";
import { js_await_if_unwrap_argument } from "./js_await_if_unwrap_argument.mjs";
import { property_get } from "./property_get.mjs";
import { equal_not } from "./equal_not.mjs";
export function js_statement_call_any_get(node) {
  "The call at the head of a statement, whether the statement does it, keeps what it gives back, or hands that straight on.";
  "Handing it straight on is the case the plain reader next door leaves out, and it is the one that matters most to anything asking what a statement calls - a function whose whole body is one call writes it that way.";
  let got = js_statement_call_get(node);
  if (equal_not(got, null)) {
    let call = property_get(got, "call");
    return call;
  }
  let returning = js_node_type_is(node, "ReturnStatement");
  if (returning) {
    let argument = js_return_argument_get(node);
    let unwrapped = js_await_if_unwrap_argument(argument);
    let calling = js_node_type_is(unwrapped, "CallExpression");
    if (calling) {
      return unwrapped;
    }
  }
  let none = null;
  return none;
}
