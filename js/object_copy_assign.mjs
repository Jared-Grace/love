import { object_assign } from "./object_assign.mjs";
import { object_copy } from "./object_copy.mjs";
export function object_copy_assign(to, from) {
  let copy = object_copy(to);
  object_assign(copy, from);
  return copy;
}
