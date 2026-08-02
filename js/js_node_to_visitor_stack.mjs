import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_to_visitor_stack(ast, node) {
  arguments_assert(arguments, 2);
  ("The chain of code a node hangs from, reaching back out to the whole file.");
  ("Finding the block a line stands in, working out where a node sits among its");
  ("neighbours, deciding which function a name was written inside. None of them");
  ("can be answered from the node alone, because a node knows nothing of what");
  ("holds it. The walk over the code is what knows, and its record of the node is");
  ("looked up only to read the chain off it.");
  let visitor = js_node_to_visitor(ast, node);
  let stack = property_get(visitor, "stack");
  return stack;
}
