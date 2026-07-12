import { js_find_return } from "./js_find_return.mjs";
import { list_index_of_insert } from "./list_index_of_insert.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { property_get } from "./property_get.mjs";
export function js_find_return_insert_statement(ast, statement) {
  let only = js_find_return(ast);
  let node = property_get(only, "node");
  let stack = property_get(only, "stack");
  let e = list_get_end_1(stack);
  list_index_of_insert(e, node, statement);
}
