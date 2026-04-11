import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_node_to_block_curried } from "../../../love/public/src/js_node_to_block_curried.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
export function js_statements_with_identifiers_named(ast, identifier_name) {
  let identifiers_named = js_identifiers_named(ast, identifier_name);
  let r = js_node_to_block_curried(ast);
  let fs = list_map(identifiers_named, r);
  let statements = list_map_property(fs, "item");
  return statements;
}
