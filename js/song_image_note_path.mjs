import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { notes_path } from "./notes_path.mjs";
export function song_image_note_path(key) {
  "Where the notes standing against one couplet's drawing are kept - what is wrong with the picture, said without saying what to draw instead.";
  "IT IS ADDRESSED BY THE PICTURE'S KEY AND NOT BY THE COUPLET NUMBER, because two couplets that repeat a symbol share one folder of drawings and therefore share every fault in them. Filed by couplet number, the same fault would be filed twice against one picture and each copy would be invisible to the reader of the other.";
  arguments_assert(arguments, 1);
  let store = fn_name("song_image_note_add");
  let path = notes_path(store, key);
  return path;
}
