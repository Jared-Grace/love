import { object_merge } from "./object_merge.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function marker_next_get(a) {
  let ni = marker_next_index(a);
  let { index, stack2 } = ni;
  let next = list_get(stack2, index);
  let n = {
    next,
  };
  let to2 = object_merge(n, from);
  return n;
}
