import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_screen_text_normalize } from "./app_code_screen_text_normalize.mjs";
import { app_code_screens_diff_key_of } from "./app_code_screens_diff_key_of.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export async function app_code_screens_diff_changed(
  current_path,
  baseline_json,
) {
  arguments_assert(arguments, 2);
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
  let r = {
    baseline,
    current,
    masked_of,
    baseline_map,
    current_map,
    changed,
  };
  return r;
}
