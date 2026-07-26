import { js_identifier_nodes_bound_by } from "./js_identifier_nodes_bound_by.mjs";
export function js_scope_identifier_nodes_own(scope_node, name) {
  "every mention of the name inside this scope that reads this scope's own binding — the declaration itself and each use of it. A mention sitting inside a deeper scope that binds the name again reads that one instead and is left alone, which is what makes this safe to rename with when the same name is bound in more than one place.";
  let nodes = js_identifier_nodes_bound_by(scope_node, name, scope_node);
  return nodes;
}
