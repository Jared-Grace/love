import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { js_stack_last } from "../../../love/public/src/js_stack_last.mjs";
export function js_block_insert(stack, inserted) {
  let block = js_stack_last(stack, "BlockStatement");
  let body = list_next(stack, block);
  let item = list_next(stack, body);
  let index = list_index_of(body, item);
  list_insert(body, index, inserted);
}
