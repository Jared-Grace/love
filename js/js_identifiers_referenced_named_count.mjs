import { js_identifiers_referenced_nodes } from "./js_identifiers_referenced_nodes.mjs";
import { js_identifier_named_curried_right } from "./js_identifier_named_curried_right.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export function js_identifiers_referenced_named_count(ast, i_name) {
  "how many times a name is referenced as a value — property and key positions do not count, so an import is not kept alive by console.log or by { log: 1 }";
  let nodes = js_identifiers_referenced_nodes(ast);
  let r = js_identifier_named_curried_right(i_name);
  let named = list_filter(nodes, r);
  let count = list_size(named);
  return count;
}
