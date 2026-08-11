import { property_equals } from "./property_equals.mjs";
import { equal } from "./equal.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_scope_binder_nearest } from "./js_scope_binder_nearest.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_unique_set } from "./list_unique_set.mjs";
import { set_includes } from "./set_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_identifier_nodes_bound_by(root, name, binder) {
  "the mentions of this name under root that read one particular binding — the scope given as binder, or, when that is null, no binding in the file at all, which is what an imported name is. Every other mention of the same name reads something else and is none of this one's business.";
  "The mentions that read a value are gathered into a set rather than a list, because the next thing done with them is to ask about every node under root whether it is one - which over a list is a search through all of them for each of them. Measured 2026-08-11: this is asked once for every private name in a file, seven or eight times a file over eight thousand files, and it was eighty-three of the hundred and six seconds the gate for names nothing binds cost. A set answers the same question - the mentions are nodes, and a node is itself or it is not - in one look instead of hundreds.";
  let referenced_nodes = js_identifiers_referenced_nodes(root);
  let referenced = list_unique_set(referenced_nodes);
  function collect(emit) {
    function consider(v) {
      let node = property_get(v, "node");
      let identifier = js_node_type_is(node, "Identifier");
      if (not(identifier)) {
        return;
      }
      let named = property_equals(node, "name", name);
      if (not(named)) {
        return;
      }
      let reads_value = set_includes(referenced, node);
      if (not(reads_value)) {
        ("a property key or a member name is text, not a mention of the binding");
        return;
      }
      let stack = property_get(v, "stack");
      let nearest = js_scope_binder_nearest(stack, name);
      let same = equal(nearest, binder);
      if (same) {
        emit(node);
      }
    }
    js_visit(root, consider);
  }
  let nodes = list_adder(collect);
  return nodes;
}
