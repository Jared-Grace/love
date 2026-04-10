import { js_node_to_block_curried } from "../../../love/public/src/js_node_to_block_curried.mjs";
import { js_node_to_block } from "../../../love/public/src/js_node_to_block.mjs";
import { js_identifiers_named } from "../../../love/public/src/js_identifiers_named.mjs";
export function js_statements_with_identifiers_named(ast, identifier_name) {
  let identifiers_named = js_identifiers_named(ast, identifier_name);
  let f = js_node_to_block(ast, node);
  let r = js_node_to_block_curried(ast2);
}
