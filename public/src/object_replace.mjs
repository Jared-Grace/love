import { object_properties_delete_all } from "./object_properties_delete_all.mjs";
import { object_merge } from "./object_merge.mjs";
export function object_replace(to, from) {
  object_properties_delete_all(to);
  object_merge(to, from);
}
