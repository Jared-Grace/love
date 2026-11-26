import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
export async function app_bible_record_inline_path_camera_show_passage(
  held,
  playback_element,
  playback,
  entry,
  refreshes,
  chapter_code,
  verse_numbers,
) {
  arguments_assert(arguments, 7);
  property_set(held, "camera_on", true);
  playback_element.pause();
  html_display_none(playback);
  let blob = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob, refreshes);
  let passage = await app_bible_record_passage(chapter_code, verse_numbers);
  return passage;
}
