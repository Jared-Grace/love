import {object_merge} from "./object_merge.mjs";
export function object_replace(to, from) {
  object_delete(to);
  object_merge(to, from);
}
