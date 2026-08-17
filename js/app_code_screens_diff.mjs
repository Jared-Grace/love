import { property_get_or } from "./property_get_or.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_screens_diff_key_of } from "./app_code_screens_diff_key_of.mjs";
import { json_from } from "./json_from.mjs";
import { property_equals } from "./property_equals.mjs";
import { file_read } from "./file_read.mjs";
import { app_code_screen_text_normalize } from "./app_code_screen_text_normalize.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
export async function app_code_screens_diff(baseline_path, current_path) {
  "compare a fresh screen manifest against the committed baseline and return which screens changed - keyed by lesson id, screen, and kind, comparing digit-masked text so the random numbers in each quiz do not count as changes. Returns { changed, added, removed } lists of keys for the make-sense judge to focus on";
  let baseline_json = await file_read(baseline_path);
  let current_json = await file_read(current_path);
  let baseline = json_from(baseline_json);
  let current = json_from(current_json);
  ("what is compared is the text plus, where the crawl captured them, the words on the buttons - the app's own screens are made almost entirely of buttons, so comparing their text alone would watch a settings screen change its every word and call it unchanged. A lesson screen carries no buttons here, because a quiz button holds a randomly sampled wrong answer and would look changed on every crawl");
  function masked_of(record) {
    let text = property_get(record, "text");
    let buttons = property_get_or(record, "buttons", []);
    let lines = list_concat_single(text, buttons);
    let joined = list_join_newline(lines);
    let masked = app_code_screen_text_normalize(joined);
    return masked;
  }
  let baseline_map = {};
  function index_baseline(record) {
    let key = app_code_screens_diff_key_of(record);
    let masked = masked_of(record);
    property_set(baseline_map, key, masked);
  }
  each(baseline, index_baseline);
  let current_map = {};
  let changed = [];
  let added = [];
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
