import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function object_copy(from) {
  let copy = object_merge_set({}, from);
  return copy;
}
