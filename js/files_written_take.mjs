import { list_unique } from "./list_unique.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { file_delete } from "./file_delete.mjs";
import { file_read_lines_empty_not_is } from "./file_read_lines_empty_not_is.mjs";
import { files_written_path } from "./files_written_path.mjs";
export async function files_written_take() {
  "Answers which files this conversation has changed since its last commit, and";
  "empties the note in the same breath. Reading without emptying would let the";
  "next commit claim files it never touched, so the two belong together.";
  "An empty answer is a real answer and not a failure: it says no named command";
  "wrote anything, which is exactly the case where a commit should go back to";
  "sweeping the whole folder.";
  let f_path = files_written_path();
  let exists = await file_exists(f_path);
  let missing = not(exists);
  if (missing) {
    let none = [];
    return none;
  }
  let lines = await file_read_lines_empty_not_is(f_path);
  await file_delete(f_path);
  let unique = list_unique(lines);
  return unique;
}
