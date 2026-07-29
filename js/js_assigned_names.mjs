import { arguments_assert } from "./arguments_assert.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function js_assigned_names(node) {
  arguments_assert(arguments, 1);
  ("Every name written to anywhere inside this piece of code");
  ("Written means assigned or stepped up and down - the two ways a name already");
  ("standing can be given a different value. Declaring a fresh name is not writing to");
  ("one, so it is not counted here.");
  ("The names are read off the whole of the target, so a write through a dot offers");
  ("the word after the dot as well as the one before it. That gathers more names than");
  ("were really written, on purpose: every caller so far asks whether a name it cares");
  ("about could have changed, and answering yes too often only makes that caller more");
  ("careful, while answering no too often would make it wrong.");
  let names = [];
  function lambda(v) {
    let visited = property_get(v, "node");
    let type = js_node_type(visited);
    let stepped_is = equal(type, "UpdateExpression");
    let target = stepped_is
      ? property_get(visited, "argument")
      : property_get(visited, "left");
    function named(w) {
      let identifier = property_get(w, "node");
      let name = property_get(identifier, "name");
      list_add(names, name);
    }
    js_visit_types(target, ["Identifier"], named);
  }
  js_visit_types(node, ["AssignmentExpression", "UpdateExpression"], lambda);
  return names;
}
