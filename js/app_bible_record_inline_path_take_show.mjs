import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_media_source_file_set } from "./html_media_source_file_set.mjs";
import { html_display_block } from "./html_display_block.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
export function app_bible_record_inline_path_take_show(
  held,
  playback,
  entry,
  refreshes,
) {
  "Shows the recorder's take - the one held now - in its video, ready to play, and redraws every recorder in the chapter, since a passage gaining a take changes the chapter's count and buttons.";
  arguments_assert(arguments, 4);
  let blob = property_get(held, "blob");
  html_media_source_file_set(playback, blob);
  html_display_block(playback);
  app_bible_record_inline_path_changed(entry, blob, refreshes);
}
