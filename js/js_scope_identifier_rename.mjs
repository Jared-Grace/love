import { list_each_size } from "./list_each_size.mjs";
import { js_shorthand_properties_expand } from "./js_shorthand_properties_expand.mjs";
import { js_scope_identifier_nodes_own } from "./js_scope_identifier_nodes_own.mjs";
import { property_set } from "./property_set.mjs";
export function js_scope_identifier_rename(scope_node, name, name_after) {
  "rename one binding and exactly the mentions that read it. Unlike a rename over the whole file, a second binding of the same name elsewhere is left standing, so this can be used precisely where a name means two things — which is the only place it is ever needed.";
  "A shorthand entry is one identifier serving as BOTH the key and the value, so renaming the local through it would rewrite the emitted key too - turning what a reader elsewhere asks for by name into a word nobody asks for, on a path that still runs and still looks right. Writing those entries out in full first keeps the key and gives the rename the value alone.";
  "The mentions are collected BEFORE that, and the order is the whole of it: the key gets the fresh node and the value keeps the original, so the original is what is still in hand to rename. Expand first and the new key joins the collection, which reproduces exactly the bug this prevents.";
  let nodes = js_scope_identifier_nodes_own(scope_node, name);
  js_shorthand_properties_expand(scope_node, name);
  function rename(node) {
    property_set(node, "name", name_after);
  }
  let renamed = list_each_size(nodes, rename);
  return renamed;
}
