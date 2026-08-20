import { js_node_type } from "./js_node_type.mjs";
import { js_scope_binding_names } from "./js_scope_binding_names.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function js_scope_label(scope) {
  "a scope written out for a reader: what kind of node it is and the names it binds, in alphabetical order.";
  "A scope carries no name of its own, so anything that wants to say WHICH scope it means - a case in a corpus, a line in a report - has to say what it is made of instead. Kind alone would not do it, since a file can hold many blocks; the names it binds are what tell two of them apart, and they are also the thing the reader wanted to know.";
  "The names are alphabetical rather than in the order the scope declares them, so that declaring the same names in another order does not change what this says.";
  let type = js_node_type(scope);
  let names = js_scope_binding_names(scope);
  let sorted = list_sort_text(names);
  let joined = list_join_comma_space(sorted);
  let label = list_join_space([type, "binds", joined]);
  return label;
}
