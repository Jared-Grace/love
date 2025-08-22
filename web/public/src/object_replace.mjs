import { object_properties_delete } from "./object_properties_delete.mjs";
import { object_merge } from "./object_merge.mjs";
export function object_replace(to, from) {
  object_properties_delete(to);
  object_merge(to, from);
}
