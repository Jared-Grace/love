import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_inline_path_entries_taken } from "./app_bible_record_inline_path_entries_taken.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { ebible_verse_numbers_runs_text } from "./ebible_verse_numbers_runs_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_bible_record_native_is } from "./app_bible_record_native_is.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { not } from "./not.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_bible_record_inline_path_refresh(
  entries,
  chapter_reference,
  chapter_button,
  count_line,
  backup_button,
  verse_numbers,
  download_button,
  stop,
  blob,
  camera_button,
  camera_on,
  record_button,
  stop_button,
  send_button,
  sent,
  delete_button,
) {
  arguments_assert(arguments, 16);
  let taken = app_bible_record_inline_path_entries_taken(entries);
  let several = list_size_greater_than(taken, 1);
  let left = list_size(taken);
  let right = list_size(entries);
  let complete = equal(left, right);
  let lists = list_map_property(taken, "verse_numbers");
  let verses_taken = list_concat_multiple(lists);
  let text = ebible_verse_numbers_runs_text(verses_taken);
  let chapter_label = complete
    ? text_combine("⬇️ Download video for complete chapter ", chapter_reference)
    : text_combine_multiple([
        "⬇️ Download video for ",
        chapter_reference,
        ":",
        text,
      ]);
  html_text_set(chapter_button, chapter_label);
  let v = String(left);
  let v2 = String(right);
  let text6 = text_combine_multiple([
    v,
    " of ",
    v2,
    " passages have a video for ",
    chapter_reference,
  ]);
  html_text_set(count_line, text6);
  html_text_set(backup_button, "🔄 Back up all unsent videos");
  if (app_bible_record_native_is()) {
    if (several) {
      html_display_block(chapter_button);
    } else {
      html_display_none(chapter_button);
    }
  }
  let text4 = ebible_verse_numbers_runs_text(verse_numbers);
  let text5 = text_combine_multiple([
    "⬇️ Download video for ",
    chapter_reference,
    ":",
    text4,
  ]);
  html_text_set(download_button, text5);
  let recording = null_not_is(stop);
  let have = null_not_is(blob);
  let ready = have && not(recording);
  app_shared_button_disabled_set(camera_button, camera_on);
  app_shared_button_disabled_set(record_button, not(camera_on) || recording);
  let disabled = not(recording);
  app_shared_button_disabled_set(stop_button, disabled);
  app_shared_button_disabled_set(send_button, not(ready) || sent);
  let disabled2 = not(ready);
  app_shared_button_disabled_set(download_button, disabled2);
  app_shared_button_disabled_set(delete_button, disabled2);
  html_text_set(
    record_button,
    have ? "🔴 Record again" : "🔴 Record this passage",
  );
  html_text_set(send_button, sent ? "✅ Sent" : "📤 Send this recording");
}
