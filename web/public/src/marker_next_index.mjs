import {list_index_of} from './list_index_of.mjs';
export function marker_next_index(a) {
  let {stack2, stack1} = a;
  let index = list_index_of(stack2, stack1);
  let index_new = index + 1;
  return index_new;
}
