import { marker } from "../../../love/public/src/marker.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
export function object_copy_right_assign(a, from) {
  marker("1");
  let a2 = object_copy(a);
  object_assign(a2, from);
  return a2;
}
