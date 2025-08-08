import {list_index_of} from './list_index_of.mjs';
import { object_merge } from './object_merge.mjs';
export function marker_next_index(a) {
  let {stack2, stack1} = a;
  let index_old = list_index_of(stack2, stack1);
  let index = index_old + 1;
  return object_merge({index},a);
}
