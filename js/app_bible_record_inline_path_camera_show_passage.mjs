import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_record_inline_path_playback_hide } from "./app_bible_record_inline_path_playback_hide.mjs";
import { app_bible_record_passage } from "./app_bible_record_passage.mjs";
export async function app_bible_record_inline_path_camera_show_passage({
  held,
  playback_element,
  playback,
  entry,
  refreshes,
  chapter_code,
  verse_numbers,
}) {
  arguments_assert(arguments, 1);
  property_set(held, "camera_on", true);
  app_bible_record_inline_path_playback_hide(
    held,
    playback_element,
    playback,
    entry,
    refreshes,
  );
  let passage = await app_bible_record_passage(chapter_code, verse_numbers);
  return passage;
}
