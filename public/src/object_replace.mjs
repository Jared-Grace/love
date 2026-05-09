import { equal_not } from "../../../love/public/src/equal_not.mjs";
import { properties_delete_all } from "../../../love/public/src/properties_delete_all.mjs";
import { object_merge_set } from "../../../love/public/src/object_merge_set.mjs";
export function object_replace(to, from) {
  if (equal_not(to, from)) {
    properties_delete_all(to);
    object_merge_set(to, from);
  }
}
