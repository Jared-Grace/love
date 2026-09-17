import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { lyric_video_document_video_name } from "./lyric_video_document_video_name.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_join } from "./path_join.mjs";
import { lyric_video_stale_write } from "./lyric_video_stale_write.mjs";
export async function lyric_video_song_video_stale_write(
  version,
  path_audio,
  path_document,
  mark,
) {
  arguments_assert(arguments, 4);
  ("$plain version");
  ("$plain path_audio");
  ("$plain path_document");
  ("$plain mark");
  ("Makes the lyric video of one recording of a psalm beside the recording itself, and only when there is no video there or the video is older than something it was made from.");
  ("★ THIS IS THE ONE TO CALL FROM ANYTHING THAT WALKS A FOLDER OF PSALM SONGS. Rendering a psalm is minutes of the machine's whole attention, so a folder asked for twice would spend all of that again to arrive at the files already sitting there. The date check itself is ",
    fn_name("lyric_video_stale_write"),
    ", shared with a song that is not a psalm; what is a psalm's own is only what its video is called.");
  ("★ WHICH RECORDING THIS IS COMES IN FROM THE CALLER RATHER THAN BEING READ BACK OFF EITHER PATH. Only the caller has the whole set of recordings of this passage in front of it, and what tells one of them apart from the others is a fact about that set and not about any one file - so it cannot be recovered here from a song's name or a document's. It is needed for what the video is called, because that is the one thing that has to differ between two singings of the same words.");
  let document = await file_read_json(path_document);
  let name_video = lyric_video_document_video_name(document, version, mark);
  let folder_audio = await path_dirname(path_audio);
  let path_output = path_join([folder_audio, name_video]);
  let r = await lyric_video_stale_write(path_audio, path_document, path_output);
  return r;
}
