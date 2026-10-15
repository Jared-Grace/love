import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_audio_to_set(
  path_document,
  seconds,
) {
  arguments_assert(arguments, 2);
  ("$plain path_document");
  ("$plain seconds");
  ("Sets where in the recording a lyric video's sound ends, so a song can stop soon after its last sung word rather than playing a long closing run; the rendering fades the sound out just before this moment and the film ends with it.");
  ("Written against the whole recording, like every other time in the document, so the opening cut can move without this one being re-timed.");
  let document = await file_read_json(path_document);
  let was = document.audio_to;
  let now = Number(seconds);
  document.audio_to = now;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    was,
    now,
  };
  return r;
}
