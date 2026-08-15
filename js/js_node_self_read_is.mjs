import { arguments_assert } from "./arguments_assert.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_visit_nodes } from "./js_visit_nodes.mjs";
import { equal } from "./equal.mjs";
export function js_node_self_read_is(node) {
  arguments_assert(arguments, 1);
  ("Whether anything anywhere inside this piece of code reads the word for whatever it was called on.");
  ("That word is not a name anybody wrote, so nothing that looks names up can find it. It is a kind of node in its own right, which is why it takes a walk of its own rather than a place in a list of names to watch for.");
  ("It matters wherever a body is being moved, because the word is answered by the call rather than by the writing: a body reading it says one thing where it stands and another thing anywhere else.");
  let read_is = false;
  function note(inner) {
    let node_type = js_node_type(inner);
    let self_is = equal(node_type, "ThisExpression");
    if (self_is) {
      read_is = true;
    }
  }
  js_visit_nodes(node, note);
  return read_is;
}
