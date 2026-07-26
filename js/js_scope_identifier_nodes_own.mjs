import { equal } from "./equal.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_scope_binder_nearest } from "./js_scope_binder_nearest.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_scope_identifier_nodes_own(scope_node, name) {
  "every mention of the name inside this scope that reads this scope's own binding — the declaration itself and each use of it. A mention sitting inside a deeper scope that binds the name again reads that one instead and is left alone, which is what makes this safe to rename with when the same name is bound in more than one place.";
  let referenced = js_identifiers_referenced_nodes(scope_node);
  function collect(emit) {
    function consider(v) {
      let node = property_get(v, "node");
      let identifier = js_node_type_is(node, "Identifier");
      if (not(identifier)) {
        return;
      }
      let named = equal(property_get(node, "name"), name);
      if (not(named)) {
        return;
      }
      let reads_value = list_includes(referenced, node);
      if (not(reads_value)) {
        ("a property key or a member name is text, not a mention of the binding");
        return;
      }
      let stack = property_get(v, "stack");
      let binder = js_scope_binder_nearest(stack, name);
      let own = equal(binder, scope_node);
      if (own) {
        emit(node);
      }
    }
    js_visit(scope_node, consider);
  }
  let nodes = list_adder(collect);
  return nodes;
}
