import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { js_node_to_block_curried } from "../../../love/public/src/js_node_to_block_curried.mjs";
export function js_identifiers_to_statements(ast, identifiers_named) {
  let r = js_node_to_block_curried(ast);
  let fs = list_map(identifiers_named, r);
  let statements = list_map_property(fs, "item");
  return statements;
}
