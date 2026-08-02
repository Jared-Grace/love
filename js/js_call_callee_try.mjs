import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_call_callee_try(node) {
  arguments_assert(arguments, 1);
  ("The thing a call reaches, or nothing at all when the node is not a call.");
  ("Nothing rather than a refusal, because this is asked of every node in a file and");
  ("most of them are not calls. A refusal would make the ordinary case the loud one.");
  ("Everything that goes on to ask what KIND of thing is reached - a plain name, a");
  ("member of an object - starts here, and each of them was carrying its own copy of");
  ("these three lines.");
  let none = null;
  let call_not = js_node_type_not_is(node, "CallExpression");
  if (call_not) {
    return none;
  }
  let callee = property_get(node, "callee");
  return callee;
}
