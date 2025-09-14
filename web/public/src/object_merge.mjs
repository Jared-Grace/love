import { object_merge_generic } from "./object_merge_generic.mjs";
export function object_merge(to, from) {
  let strict = true;
  object_merge_generic(strict, to, from);
  return to;
}
