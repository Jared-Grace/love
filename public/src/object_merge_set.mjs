import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function object_merge_set(to, from) {
  object_merge(to, from);
  return to;
}
