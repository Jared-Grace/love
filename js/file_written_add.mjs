import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_append } from "./file_append.mjs";
import { files_written_path } from "./files_written_path.mjs";
export async function file_written_add(f_path) {
  arguments_assert(arguments, 1);
  ("Notes that this file has just been changed, so the commit that follows can name");
  ("exactly what it is committing instead of sweeping up everything in the folder.");
  ("One plain path per line: the note is read once and thrown away, so it never");
  ("needs to carry anything a later reader would have to interpret.");
  let line = text_combine(f_path, "\n");
  let path_note = files_written_path();
  await file_append(path_note, line);
}
