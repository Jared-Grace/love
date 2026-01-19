import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
export function object_copy_assign(to_before, from) {
  let to = object_copy(to_before);
  object_assign(to, from);
  return to;
}
