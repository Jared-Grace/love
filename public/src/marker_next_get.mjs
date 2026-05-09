import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function marker_next_get(a) {
  let ni = marker_next_index(a);
  let { index, stack2 } = ni;
  let next = list_get(stack2, index);
  let n = {
    next,
  };
  let to = object_merge_set(n, ni);
  return to;
}
