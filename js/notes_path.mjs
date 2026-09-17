import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { storage_function_path } from "./storage_function_path.mjs";
export function notes_path(store, key) {
  "$plain store";
  "$plain key";
  "Where the notes standing against one thing are kept: one file per thing, inside the folder of the store they were filed through.";
  "★ ONE STORE SHAPE FOR EVERY BENCH THAT TAKES NOTES. A couplet's drawing, a lyric video's picture and a file of a proposed code change are each faulted by a person pressing a part and typing what is wrong, and each was being kept as the same file of the same shape under a different name. What differs between them is only which folder and which key, so those are what is handed in.";
  "ONE FILE PER THING rather than one file per store, so two people reviewing two things at once cannot overwrite each other. A single file would be read and written whole by every filing, and the second of two notes filed a second apart would carry a copy of the store that predates the first.";
  "THE STORE IS A FUNCTION'S NAME, because a function's own folder is where this repo keeps what a function writes, and asking for it by name is what lets a rename carry the folder along.";
  arguments_assert(arguments, 2);
  let named = String(key);
  let file_name = file_name_json(named);
  let path = storage_function_path(store, file_name);
  return path;
}
