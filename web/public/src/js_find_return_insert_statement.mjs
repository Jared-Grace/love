import { js_find_return } from "../../../love/public/src/js_find_return.mjs";
import { list_index_of_insert } from "../../../love/public/src/list_index_of_insert.mjs";
import { list_get_end_ } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_find_return_insert_statement(ast, statement) {
  let only = js_find_return(ast);
  let node = property_get(only, "node");
  let stack = property_get(only, "stack");
  let e = list_get_end_(stack);
  list_index_of_insert(e, node, statement);
}
