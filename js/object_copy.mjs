import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function object_copy(from) {
  const copy = object_merge({}, from);
  return copy;
}
