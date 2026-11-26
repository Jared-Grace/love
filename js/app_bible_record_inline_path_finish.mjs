import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_set } from "./property_set.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_bible_record_inline_path_take_show } from "./app_bible_record_inline_path_take_show.mjs";
import { app_bible_record_take_keep } from "./app_bible_record_take_keep.mjs";
export async function app_bible_record_inline_path_finish({
  held,
  canvas,
  playback,
  entry,
  refreshes,
  chapter_code,
  verse_numbers,
}) {
  arguments_assert(arguments, 1);
  let stopping = property_get(held, "stop");
  if (null_is(stopping)) {
    return;
  }
  property_set(held, "stop", null);
  let value = await stopping();
  property_set(held, "blob", value);
  property_set(held, "camera_on", false);
  for (let track of property_get(held, "stream").getTracks()) {
    track.stop();
  }
  html_display_none(canvas);
  app_bible_record_inline_path_take_show(held, playback, entry, refreshes);
  let taken = property_get(held, "blob");
  await app_bible_record_take_keep(chapter_code, verse_numbers, taken);
}
