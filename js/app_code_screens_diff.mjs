import { property_equals } from "./property_equals.mjs";
import { file_read } from "./file_read.mjs";
import { app_code_screen_text_normalize } from "./app_code_screen_text_normalize.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
import { not } from "./not.mjs";
export async function app_code_screens_diff(baseline_path, current_path) {
  "compare a fresh screen manifest against the committed baseline and return which screens changed - keyed by lesson id, screen, and kind, comparing digit-masked text so the random numbers in each quiz do not count as changes. Returns { changed, added, removed } lists of keys for the make-sense judge to focus on";
  let baseline_json = await file_read(baseline_path);
  let current_json = await file_read(current_path);
  let baseline = JSON.parse(baseline_json);
  let current = JSON.parse(current_json);
  function key_of(record) {
    let id = property_get(record, "id");
    let screen = property_get(record, "screen");
    let kind = property_get(record, "kind");
    let kind_text = text_to(kind);
    let key = text_combine_multiple([id, "|", screen, "|", kind_text]);
    return key;
  }
  function masked_of(record) {
    let text = property_get(record, "text");
    let masked = app_code_screen_text_normalize(text);
    return masked;
  }
  let baseline_map = {};
  function index_baseline(record) {
    let key = key_of(record);
    let masked = masked_of(record);
    property_set(baseline_map, key, masked);
  }
  each(baseline, index_baseline);
  let current_map = {};
  let changed = [];
  let added = [];
  function check_current(record) {
    let key = key_of(record);
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
    let key = key_of(record);
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
