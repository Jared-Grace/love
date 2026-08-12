import { equal } from "./equal.mjs";
import { js_node_inside_any_is } from "./js_node_inside_any_is.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_declarator_holding(node, declarators) {
  "The name a line binds, when this node is part of what fills that line - and null when the node sits somewhere no line is binding anything.";
  "A canonicalized file lifts almost every expression onto a line of its own before it is used, so asking what a value is called is nearly always asking which declaration it landed in. Reading that name is what lets a question about the value be asked again about the name.";
  for (let declarator of declarators) {
    let init = property_get(declarator, "init");
    if (equal(init, null)) {
      continue;
    }
    let inside_is = js_node_inside_any_is(node, [init]);
    if (equal(inside_is, false)) {
      continue;
    }
    let id = property_get(declarator, "id");
    let bound = property_get(id, "name");
    return bound;
  }
  let missing = null;
  return missing;
}
