import { list_index_of_next } from "./list_index_of_next.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { object_merge } from "./object_merge.mjs";
export function marker_next_index(a) {
  let { stack2, stack1 } = a;
  let index = list_index_of_next(stack2, stack1);
  return object_merge(
    {
      index,
    },
    a,
  );
}
