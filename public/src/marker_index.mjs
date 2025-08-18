import { marker } from "./marker.mjs";
import { list_index_of_previous } from "./list_index_of_previous.mjs";
import { list_index_of_next } from "./list_index_of_next.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { object_merge } from "./object_merge.mjs";
export function marker_index(a) {
  marker("1");
  let { stack2, stack1 } = a;
  let index = list_index_of(stack2, stack1);
  let to = object_merge(
    {
      index,
    },
    a,
  );
  return to;
}
