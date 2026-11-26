import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { property_get } from "./property_get.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
export function app_bible_record_inline_path_playback_hide(
  held,
  playback_element,
  playback,
  entry,
  refreshes,
) {
  "Stops and hides the recorder's video, and redraws every recorder in the chapter from the take held now - used when the camera takes the video's place, and when the take is deleted.";
  arguments_assert(arguments, 5);
  playback_element.pause();
  html_display_none(playback);
  let blob = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob, refreshes);
}
