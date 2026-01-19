import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
export function object_copy_assign(to, from) {
  let copy = object_copy(to);
  object_assign(copy, from);
  return copy;
}
