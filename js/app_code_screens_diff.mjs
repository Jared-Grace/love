import { property_get } from "./property_get.mjs";
import { app_code_screens_diff_added } from "./app_code_screens_diff_added.mjs";
import { app_code_screens_diff_key_of } from "./app_code_screens_diff_key_of.mjs";
import { property_equals } from "./property_equals.mjs";
import { file_read } from "./file_read.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export async function app_code_screens_diff(baseline_path, current_path) {
  "compare a fresh screen manifest against the committed baseline and return which screens changed - keyed by lesson id, screen, and kind, comparing digit-masked text so the random numbers in each quiz do not count as changes. Returns { changed, added, removed } lists of keys for the make-sense judge to focus on";
  let baseline_json = await file_read(baseline_path);
  let r = await app_code_screens_diff_added(current_path, baseline_json);
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
  each(current, check_current);
  let removed = [];
  function check_removed(record) {
    let key = app_code_screens_diff_key_of(record);
    let still = property_exists(current_map, key);
    if (not(still)) {
      list_add(removed, key);
    }
  }
  each(baseline, check_removed);
  let result = {
    changed,
    added,
    removed,
  };
  return result;
}
