import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function song_image_note_path(key) {
  "Where the notes standing against one couplet's drawing are kept - what is wrong with the picture, said without saying what to draw instead.";
  "IT IS ADDRESSED BY THE PICTURE'S KEY AND NOT BY THE COUPLET NUMBER, because two couplets that repeat a symbol share one folder of drawings and therefore share every fault in them. Filed by couplet number, the same fault would be filed twice against one picture and each copy would be invisible to the reader of the other.";
  "ONE FILE PER PICTURE rather than one file for the hymn, so two people reviewing two couplets at once cannot overwrite each other. A single file would be read and written whole by every filing, and the second of two notes filed a second apart would carry a copy of the store that predates the first.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("song_image_note_add");
  let named = String(key);
  let file_name = file_name_json(named);
  let path = storage_function_path(f_name, file_name);
  return path;
}
