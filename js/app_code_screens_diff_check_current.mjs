import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_screens_diff_key_of } from "./app_code_screens_diff_key_of.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { property_equals } from "./property_equals.mjs";
export function app_code_screens_diff_check_current(r) {
  arguments_assert(arguments, 1);
  let added = property_get(r, "added");
  let baseline = property_get(r, "baseline");
  let current = property_get(r, "current");
  let masked_of = property_get(r, "masked_of");
  let baseline_map = property_get(r, "baseline_map");
  let current_map = property_get(r, "current_map");
  let changed = property_get(r, "changed");
  function check_current(record) {
    let key = app_code_screens_diff_key_of(record);
    property_set(current_map, key, true);
    let masked = masked_of(record);
    let known = property_exists(baseline_map, key);
    if (not(known)) {
      list_add(added, key);
      return;
    }
    let same = property_equals(baseline_map, key, masked);
    if (not(same)) {
      list_add(changed, key);
    }
  }
  let r2 = {
    added,
    baseline,
    current,
    current_map,
    changed,
    check_current,
  };
  return r2;
}
