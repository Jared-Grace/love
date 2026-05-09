import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function marker_next_index(a) {
  let { stack2, stack1 } = a;
  let index = list_index_of_next(stack2, stack1);
  let to = object_merge_set(
    {
      index,
    },
    a,
  );
  return to;
}
