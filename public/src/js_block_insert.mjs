import { list_insert } from "./list_insert.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_next } from "./list_next.mjs";
import { js_stack_last } from "./js_stack_last.mjs";
export function js_block_insert(stack, inserted) {
  let block = js_stack_last(stack, "BlockStatement");
  let block_body = list_next(stack, block);
  let block_body_item = list_next(stack, block_body);
  let block_body_item_index = list_index_of(block_body, block_body_item);
  list_insert(block_body, block_body_item_index, inserted);
}
