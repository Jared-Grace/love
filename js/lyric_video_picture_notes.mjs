import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_read } from "./notes_read.mjs";
export async function lyric_video_picture_notes(key) {
  "$plain key";
  "Every note standing against one background picture of a lyric video, in the order they were made.";
  arguments_assert(arguments, 1);
  let store = fn_name("lyric_video_picture_note_add");
  let notes = await notes_read(store, key);
  return notes;
}
