import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_audio_to_remove(path_document) {
  arguments_assert(arguments, 1);
  ("$plain path_document");
  ("Takes out where a lyric video's sound was set to end, so the film plays the recording to its own end with no fade of the film's own.");
  ("For a recording that already fades itself: the film's fade on top of it is heard as the last moments dropping in volume twice.");
  let document = await file_read_json(path_document);
  let was = document.audio_to;
  delete document.audio_to;
  await file_overwrite_json(path_document, document);
  let r = {
    path_document,
    was,
  };
  return r;
}
