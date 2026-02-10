import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function marker_index(a) {
  let stack1 = property_get(a, "stack1");
  let stack2 = property_get(a, "stack2");
  let index = list_index_of(stack2, stack1);
  let i = object_merge(
    {
      index,
    },
    a,
  );
  return i;
}
