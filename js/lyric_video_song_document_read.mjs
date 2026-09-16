import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_songs_folder } from "./lyric_video_songs_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function lyric_video_song_document_read(name) {
  "$plain name";
  "The whole timing document of one song, named by the song rather than by where the document sits, and nothing at all when that song has no document.";
  "A SONG WITH NO DOCUMENT IS AN ANSWER AND NOT A FAILURE. It is the same promise the psalms' reader makes, and for the same reason: a screen that asks for a name somebody typed has to be able to say there is nothing there without falling over.";
  "IT HANDS BACK THE WHOLE DOCUMENT. A reviewer looking at a drawing needs the words sung over it standing beside it, and those are the other half of this one file - so splitting it would buy nothing and cost a second round trip on a phone.";
  arguments_assert(arguments, 1);
  let folder = lyric_video_songs_folder();
  let file_name = name + ".json";
  let path = path_join([folder, file_name]);
  let exists = await file_exists(path);
  let none = not(exists);
  if (none) {
    let nothing = null;
    return nothing;
  }
  let document = await file_read_json(path);
  return document;
}
