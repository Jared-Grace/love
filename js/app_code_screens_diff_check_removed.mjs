import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_screens_diff_removed } from "./app_code_screens_diff_removed.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_screens_diff_key_of } from "./app_code_screens_diff_key_of.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export function app_code_screens_diff_check_removed(r2) {
  arguments_assert(arguments, 1);
  let r3 = app_code_screens_diff_removed(r2);
  let removed = property_get(r3, "removed");
  let added = property_get(r3, "added");
  let baseline = property_get(r3, "baseline");
  let current_map = property_get(r3, "current_map");
  let changed = property_get(r3, "changed");
  function check_removed(record) {
    let key = app_code_screens_diff_key_of(record);
    let still = property_exists(current_map, key);
    if (not(still)) {
      list_add(removed, key);
    }
  }
  let r = {
    removed,
    added,
    baseline,
    changed,
    check_removed,
  };
  return r;
}
