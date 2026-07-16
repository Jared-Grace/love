import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { list_is } from "./list_is.mjs";
import { js_statement_node_is } from "./js_statement_node_is.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_find } from "./js_block_find.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_block_insert(stack, inserted) {
  arguments_assert_each(arguments, [list_is, js_statement_node_is]);
  let v = js_block_find(stack);
  let index = property_get(v, "index");
  let body = property_get(v, "body");
  list_insert(body, index, inserted);
}
