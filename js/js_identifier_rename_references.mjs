import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { js_shorthand_properties_expand } from "./js_shorthand_properties_expand.mjs";
export function js_identifier_rename_references(ast, name, name_after) {
  "Every mention of the name that reads or binds a value becomes name_after, and every place the same word only names a property, a key or a method is left as it was.";
  "Renaming every identifier spelled the same way also renamed the word right of a dot: a local add renamed to adder turned a set's held.add(item) into held.adder(item), which throws on the first call. The word right of a dot belongs to the thing on its left, not to this file's bindings, so a rename of a local has no business touching it.";
  "The mentions are collected before shorthand entries are written out, for the reason the scope rename gives: the key gets a fresh node and the value keeps the original, so only the value is still in hand to rename and the emitted key keeps its word.";
  let nodes = js_identifiers_referenced_named_nodes(ast, name);
  js_shorthand_properties_expand(ast, name);
  for (let node of nodes) {
    node.name = name_after;
  }
}
