import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
export function object_copy_right_assign(to, from_before) {
  let from = object_copy(from_before);
  object_assign(to, from);
  return to;
}
