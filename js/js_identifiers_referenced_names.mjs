import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
export function js_identifiers_referenced_names(ast) {
  "the distinct names actually referenced as values — what a file needs imports for";
  let nodes = js_identifiers_referenced_nodes(ast);
  let unique = list_map_property_unique(nodes, "name");
  return unique;
}
