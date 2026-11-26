import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_record_inline_path_take_show } from "./app_bible_record_inline_path_take_show.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_take_keep } from "./app_bible_record_take_keep.mjs";
export async function app_bible_record_inline_path_camera_show_native_done({
  taken,
  why,
  problem,
  held,
  playback,
  entry,
  refreshes,
  chapter_code,
  verse_numbers,
}) {
  arguments_assert(arguments, 1);
  if (text_empty_not_is(why)) {
    let text = text_combine("Not recorded: ", why);
    html_text_set(problem, text);
    return;
  }
  property_set(held, "blob", taken);
  property_set(held, "sent", false);
  app_bible_record_inline_path_take_show(held, playback, entry, refreshes);
  let taken2 = property_get(held, "blob");
  await app_bible_record_take_keep(chapter_code, verse_numbers, taken2);
}
