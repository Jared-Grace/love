import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function js_assigned_names_generic(node, target_names) {
  arguments_assert(arguments, 2);
  ("Every name written to anywhere inside this piece of code, with the caller saying which names a written-to place offers up.");
  ("Written means assigned or stepped up and down - the two ways a name already standing can be given a different value. Declaring a fresh name is not writing to one, so it is not counted here.");
  ("The walk is held once and the reading of the written-to place is the caller's, because two callers want two different answers from the same walk and the difference between them is the difference between a name being pointed somewhere else and the thing it points at being changed. Which of those a caller cares about is decided by what the caller is about to do, not by the shape of the code.");
  let names = [];
  function lambda(v) {
    let visited = property_get(v, "node");
    let type = js_node_type(visited);
    let stepped_is = equal(type, "UpdateExpression");
    let target = stepped_is
      ? property_get(visited, "argument")
      : property_get(visited, "left");
    let found = target_names(target);
    list_add_multiple(names, found);
  }
  js_visit_types(node, ["AssignmentExpression", "UpdateExpression"], lambda);
  return names;
}
