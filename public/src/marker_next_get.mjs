import {marker_next_index} from './marker_next_index.mjs';
import {list_get} from './list_get.mjs';
import {list_index_of} from './list_index_of.mjs';
export function marker_next_get(a) {
  let {index,stack2} = marker_next_index(a);
  let next = list_get(stack2, index);
  return next;
}
