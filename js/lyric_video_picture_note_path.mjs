import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_path } from "./notes_path.mjs";
export function lyric_video_picture_note_path(key) {
  "$plain key";
  "Where the notes standing against one background picture of a lyric video are kept - what is wrong with the picture, said without saying what to draw instead.";
  "ONE FILE PER PICTURE rather than one file for the song, so a picture that gets redrawn carries its own account of why with it.";
  arguments_assert(arguments, 1);
  let store = fn_name("lyric_video_picture_note_add");
  let path = notes_path(store, key);
  return path;
}
