import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { js_node_to_block_curried } from "../../../love/public/src/js_node_to_block_curried.mjs";
import { js_node_to_block } from "../../../love/public/src/js_node_to_block.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
import { list_map_unique } from "../../../love/public/src/list_map_unique.mjs";
export function js_statements_with_identifiers_named(ast, identifier_name) {
  let identifiers_named = js_identifiers_named(ast, identifier_name);
  let f = js_node_to_block(ast, node);
  let r = js_node_to_block_curried(ast);
  let fs = list_map_unique(identifiers_named, r);
  let mapped = list_map_property(list, property_name);
}
