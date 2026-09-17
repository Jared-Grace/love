import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_write } from "./notes_write.mjs";
export async function song_image_notes_write(key, notes) {
  "Put one couplet's whole note list back on the disk.";
  arguments_assert(arguments, 2);
  let store = fn_name("song_image_note_add");
  let path = await notes_write(store, key, notes);
  return path;
}
