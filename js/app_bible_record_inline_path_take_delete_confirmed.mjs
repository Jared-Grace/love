import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { not } from "./not.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_record_take_delete } from "./app_bible_record_take_delete.mjs";
import { app_bible_record_take_kept_delete } from "./app_bible_record_take_kept_delete.mjs";
import { property_set } from "./property_set.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
export async function app_bible_record_inline_path_take_delete_confirmed(
  sign_in,
  chapter_code,
  verse_numbers,
  held,
  playback_element,
  playback,
  entry,
  refreshes,
) {
  arguments_assert(arguments, 8);
  ("the store build sent nothing, so there is nothing in storage to delete and nobody to sign in");
  let b = app_bible_record_local_is();
  if (not(b)) {
    await firebase_auth_ensure(sign_in);
    await app_bible_record_take_delete(chapter_code, verse_numbers);
  }
  await app_bible_record_take_kept_delete(chapter_code, verse_numbers);
  property_set(held, "blob", null);
  property_set(held, "sent", false);
  playback_element.pause();
  html_display_none(playback);
  let blob = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob, refreshes);
}
