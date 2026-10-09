import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_audio_from_set(
  path_document,
  seconds,
) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain seconds");
  ("Sets where in the recording a lyric video's sound begins, so a song can open on the singing rather than on music before it; the rendering cuts the sound there and moves every line earlier by the same amount.");
  ("The times of the lines stay written against the whole recording, so the cut can be moved again later without timing anything twice.");
  let document = await file_read_json(path_document);
  let was = document.audio_from;
  let now = Number(seconds);
  document.audio_from = now;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    was,
    now,
  };
  return r;
}
