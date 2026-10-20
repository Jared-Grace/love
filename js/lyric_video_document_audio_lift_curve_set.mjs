import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_audio_lift_curve_set(
  path_document,
  seconds_from,
  seconds_to,
  decibels,
  power,
) {
  arguments_assert(arguments, 5);
  ("$plain path_document");
  ("$plain seconds_from");
  ("$plain seconds_to");
  ("$plain decibels");
  ("$plain power");
  ("Sets a rise in a lyric video's loudness: from nothing at seconds_from to the full decibels at seconds_to, held to the end, following the share of the way through raised to power. It is for a recording whose own fade-out begins while the last word is still being sung; a power near 2 follows such a fade.");
  ("Written against the whole recording, like every other time in the document, so the opening cut can move without this one being re-timed.");
  let document = await file_read_json(path_document);
  let was = document.audio_lift;
  let now = {
    from: Number(seconds_from),
    to: Number(seconds_to),
    decibels: Number(decibels),
    power: Number(power),
  };
  document.audio_lift = now;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    was,
    now,
  };
  return r;
}
