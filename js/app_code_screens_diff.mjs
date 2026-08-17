import { property_get } from "./property_get.mjs";
import { app_code_screens_diff_check_removed } from "./app_code_screens_diff_check_removed.mjs";
import { app_code_screens_diff_check_current } from "./app_code_screens_diff_check_current.mjs";
import { app_code_screens_diff_added } from "./app_code_screens_diff_added.mjs";
import { file_read } from "./file_read.mjs";
import { each } from "./each.mjs";
export async function app_code_screens_diff(baseline_path, current_path) {
  "compare a fresh screen manifest against the committed baseline and return which screens changed - keyed by lesson id, screen, and kind, comparing digit-masked text so the random numbers in each quiz do not count as changes. Returns { changed, added, removed } lists of keys for the make-sense judge to focus on";
  let baseline_json = await file_read(baseline_path);
  let r = await app_code_screens_diff_added(current_path, baseline_json);
  let r2 = app_code_screens_diff_check_current(r);
  let r3 = app_code_screens_diff_check_removed(r2);
  let check_removed = property_get(r3, "check_removed");
  let changed = property_get(r3, "changed");
  let baseline = property_get(r3, "baseline");
  let added = property_get(r3, "added");
  let removed = property_get(r3, "removed");
  each(baseline, check_removed);
  let result = {
    changed,
    added,
    removed,
  };
  return result;
}
