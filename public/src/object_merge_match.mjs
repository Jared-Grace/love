import { object_merge_generic } from "../../../love/public/src/object_merge_generic.mjs";
export function object_merge_match(to, from) {
  object_merge_generic("strict", to, from);
  return to;
}
