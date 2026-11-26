import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_clip_path } from "./app_bible_record_clip_path.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_record_draft_path_of } from "./app_bible_record_draft_path_of.mjs";
import { firebase_delete_browser_if_exists } from "./firebase_delete_browser_if_exists.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
import { app_bible_record_take_sent_keep } from "./app_bible_record_take_sent_keep.mjs";
import { app_bible_record_take_kept_delete } from "./app_bible_record_take_kept_delete.mjs";
export async function app_bible_record_inline_path_send(
  sign_in,
  held,
  chapter_code,
  verse_numbers,
  busy,
  send_button,
  entry,
  refreshes,
) {
  arguments_assert(arguments, 8);
  await firebase_auth_ensure(sign_in);
  async function work() {
    let blob = property_get(held, "blob");
    let path = app_bible_record_clip_path(chapter_code, verse_numbers, blob);
    let blob14 = property_get(held, "blob");
    await firebase_upload_blob_browser_quiet(path, blob14);
    property_set(held, "sent", true);
    ("Once sent, its draft backup is not needed.");
    let draft = app_bible_record_draft_path_of(path);
    await firebase_delete_browser_if_exists(draft);
  }
  await busy(send_button, "⏳ Sending the video...", work);
  let blob15 = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob15, refreshes);
  ("The sent take stays on the phone as sent, so coming back plays it at once (human 2026-11-24).");
  let taken = property_get(held, "blob");
  await app_bible_record_take_sent_keep(chapter_code, verse_numbers, taken);
  await app_bible_record_take_kept_delete(chapter_code, verse_numbers);
}
