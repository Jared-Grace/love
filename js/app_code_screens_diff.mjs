import { property_get } from "./property_get.mjs";
import { app_code_screens_diff_check_current } from "./app_code_screens_diff_check_current.mjs";
import { app_code_screens_diff_added } from "./app_code_screens_diff_added.mjs";
import { app_code_screens_diff_key_of } from "./app_code_screens_diff_key_of.mjs";
import { file_read } from "./file_read.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export async function app_code_screens_diff(baseline_path, current_path) {
  "compare a fresh screen manifest against the committed baseline and return which screens changed - keyed by lesson id, screen, and kind, comparing digit-masked text so the random numbers in each quiz do not count as changes. Returns { changed, added, removed } lists of keys for the make-sense judge to focus on";
  let baseline_json = await file_read(baseline_path);
  let r = await app_code_screens_diff_added(current_path, baseline_json);
  let r2 = app_code_screens_diff_check_current(r);
  let check_current = property_get(r2, "check_current");
  let changed = property_get(r2, "changed");
  let current_map = property_get(r2, "current_map");
  let current = property_get(r2, "current");
  let baseline = property_get(r2, "baseline");
  let added = property_get(r2, "added");
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
