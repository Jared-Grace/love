import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function marker_next_index(a) {
  let stack_1 = property_get(a, "stack_1");
  let stack_2 = property_get(a, "stack_2");
  let index = list_index_of_next(stack_2, stack_1);
  let to = object_merge_set(
    {
      index,
    },
    a,
  );
  return to;
}
