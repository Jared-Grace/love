import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_assigned_target(node) {
  arguments_assert(arguments, 1);
  ("The place one write writes to, whichever of the two ways the write is spelled - a name given a value, or a name stepped up or down.");
  ("The two shapes hold that place under different words. Every reader of what a piece of code writes to has to know both, and a reader that learns only one of them quietly reads half the writes.");
  let stepped_is = js_node_type_is(node, "UpdateExpression");
  let target = stepped_is
    ? property_get(node, "argument")
    : property_get(node, "left");
  return target;
}
