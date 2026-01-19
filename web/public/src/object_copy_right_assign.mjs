import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
export function object_copy_right_assign(to_before, from_before) {
  let to = object_copy(to_before);
  object_assign(to, from_before);
  return to;
}
