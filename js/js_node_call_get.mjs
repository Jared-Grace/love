import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_statement_call_get } from "./js_statement_call_get.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_call_get(node) {
  "The call a selection names, whether the selection stopped at the call itself";
  "or at the line holding it. Two selectors already answer at those two depths,";
  "and without this every call-level verb would have to pick one of them and";
  "refuse the other — which is a verb that pairs with half the addresses.";
  let call_is = js_node_type_is(node, "CallExpression");
  if (call_is) {
    return node;
  }
  let v = js_statement_call_get(node);
  let call = property_get(v, "call");
  return call;
}
