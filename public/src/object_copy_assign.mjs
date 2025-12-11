import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
export function object_copy_assign(a, from) {
  let a2 = object_copy(a);
  object_assign(a2, from);
  return a2;
}
