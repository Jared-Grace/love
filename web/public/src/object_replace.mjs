import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { object_properties_delete_all } from "../../../love/public/src/object_properties_delete_all.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function object_replace(to, from) {
  if (equal_not(to, from)) {
    object_properties_delete_all(to);
    object_merge(to, from);
  }
}
