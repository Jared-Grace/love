import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_read } from "./notes_read.mjs";
export async function song_image_notes(key) {
  "Every note standing against one couplet's drawing, in the order they were made.";
  arguments_assert(arguments, 1);
  let store = fn_name("song_image_note_add");
  let notes = await notes_read(store, key);
  return notes;
}
