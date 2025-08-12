import {list_index_of} from './list_index_of.mjs';
export function list_next_index(list, item) {
  let next = list_next_index(list, item);
  let index = list_index_of(list, next);
  return index;
}
