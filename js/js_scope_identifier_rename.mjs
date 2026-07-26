import { each } from "./each.mjs";
import { js_scope_identifier_nodes_own } from "./js_scope_identifier_nodes_own.mjs";
import { property_set } from "./property_set.mjs";
export function js_scope_identifier_rename(scope_node, name, name_after) {
  "rename one binding and exactly the mentions that read it. Unlike a rename over the whole file, a second binding of the same name elsewhere is left standing, so this can be used precisely where a name means two things — which is the only place it is ever needed.";
  let nodes = js_scope_identifier_nodes_own(scope_node, name);
  function rename(node) {
    property_set(node, "name", name_after);
  }
  each(nodes, rename);
  let renamed = nodes.length;
  return renamed;
}
