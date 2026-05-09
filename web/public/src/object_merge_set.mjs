import { object_merge_generic } from "../../../love/public/src/object_merge_generic.mjs";
export function object_merge_set(to, from) {
  object_merge(to, from);
  return to;
}

function object_merge(to, from) {
  object_merge_generic("strict", to, from);
}
