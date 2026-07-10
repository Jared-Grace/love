import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function marker_index(a) {
  let stack_1 = property_get(a, "stack_1");
  let stack_2 = property_get(a, "stack_2");
  let index = list_index_of(stack_2, stack_1);
  let i = object_merge_set(
    {
      index,
    },
    a,
  );
  return i;
}
