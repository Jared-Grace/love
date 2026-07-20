import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
export function js_identifiers_referenced_names(ast) {
  "the distinct names actually referenced as values — what a file needs imports for";
  let nodes = js_identifiers_referenced_nodes(ast);
  let names = list_map_property(nodes, "name");
  let unique = list_unique(names);
  return unique;
}
