import { list_index_of_previous } from "../../../love/public/src/list_index_of_previous.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function marker_previous_index(a) {
  let { stack2, stack1 } = a;
  let index = list_index_of_previous(stack2, stack1);
  const p = object_merge(
    {
      index,
    },
    a,
  );
  return p;
}
