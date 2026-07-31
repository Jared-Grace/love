import { arguments_assert } from "./arguments_assert.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
export async function memory_note_text(name) {
  arguments_assert(arguments, 1);
  ("one memory note as it stands on disk, named by its file name. Read-only.");
  ("the sibling of the index reader, for the notes the index points at.");
  let folder = memory_folder();
  let path = path_join([folder, name]);
  let text = await file_read(path);
  return text;
}
