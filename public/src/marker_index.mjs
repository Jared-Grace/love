import { marker } from "../../../love/public/src/marker.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function marker_index(a) {
  marker("1");
  let { stack2, stack1 } = a;
  let index = list_index_of(stack2, stack1);
  let i = object_merge(
    {
      index,
    },
    a,
  );
  return i;
}
