import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_map } from "./list_map.mjs";
import { js_node_to_block_curried } from "./js_node_to_block_curried.mjs";
export function js_identifiers_to_statements(ast, identifiers_named) {
  let c = js_node_to_block_curried(ast);
  let fs = list_map(identifiers_named, c);
  let statements = list_map_property_unique(fs, "item");
  return statements;
}
