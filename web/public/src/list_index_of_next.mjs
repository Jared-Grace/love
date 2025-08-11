import {list_index_of} from './list_index_of.mjs';
export function list_index_of_next(list, item) {
  let index = list_index_of(list, item);
  let index_next = index + 1;
  return index_next;
}
