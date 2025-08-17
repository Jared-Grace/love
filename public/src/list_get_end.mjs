import { list_index_last } from "./list_index_last.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
export function list_get_end(stack, index_from_end) {
  const difference = list_index_last(stack) - index_from_end;
  const item = list_get(stack, difference);
  return item;
}
