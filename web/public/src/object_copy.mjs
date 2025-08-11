import { object_merge } from "./object_merge.mjs";
export function object_copy( from) {
  return object_merge({}, from);
}
