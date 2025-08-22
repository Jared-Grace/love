import { list_index_of_next } from "./list_index_of_next.mjs";
import { object_merge } from "./object_merge.mjs";
export function marker_next_index(a) {
  let { stack2, stack1 } = a;
  let index = list_index_of_next(stack2, stack1);
  let to = object_merge(
    {
      index,
    },
    a,
  );
  return to;
}
