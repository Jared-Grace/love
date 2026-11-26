import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_set } from "./property_set.mjs";
import { html_media_recorder_start } from "./html_media_recorder_start.mjs";
import { app_bible_record_inline_path_changed } from "./app_bible_record_inline_path_changed.mjs";
export function app_bible_record_inline_path_start(
  held,
  canvas_element,
  entry,
  refreshes,
) {
  arguments_assert(arguments, 4);
  let b = property_get(held, "camera_on");
  if (not(b) || null_not_is(property_get(held, "stop"))) {
    return;
  }
  property_set(held, "blob", null);
  property_set(held, "sent", false);
  let canvas_stream = canvas_element.captureStream(30);
  for (let track of property_get(held, "stream").getAudioTracks()) {
    canvas_stream.addTrack(track);
  }
  let value = html_media_recorder_start(canvas_stream);
  property_set(held, "stop", value);
  let blob = property_get(held, "blob");
  app_bible_record_inline_path_changed(entry, blob, refreshes);
}
