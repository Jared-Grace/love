import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_write } from "./notes_write.mjs";
export async function lyric_video_picture_notes_write(key, notes) {
  "$plain key";
  "$plain notes";
  "Put one background picture's whole note list back on the disk.";
  arguments_assert(arguments, 2);
  let store = fn_name("lyric_video_picture_note_add");
  let path = await notes_write(store, key, notes);
  return path;
}
