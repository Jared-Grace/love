import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_take_kept_or_null } from "./app_bible_record_take_kept_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { app_bible_record_take_sent_or_null } from "./app_bible_record_take_sent_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
export async function app_bible_record_inline_path_sent_show(
  chapter_code,
  verse_numbers,
  held,
  playback,
  entry,
  refreshes,
) {
  arguments_assert(arguments, 6);
  let kept = await app_bible_record_take_kept_or_null(
    chapter_code,
    verse_numbers,
  );
  let found = kept;
  if (null_is(found) && not(app_bible_record_local_is())) {
    found = await app_bible_record_take_sent_or_null(
      chapter_code,
      verse_numbers,
    );
  }
  if (
    null_is(found) ||
    null_not_is(property_get(held, "blob")) ||
    property_get(held, "camera_on")
  ) {
    return;
  }
  property_set(held, "blob", found);
  let value = null_is(kept);
  property_set(held, "sent", value);
  html_media_source_file_set(playback, found);
  html_display_block(playback);
  let blob4 = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob4, refreshes);
}
