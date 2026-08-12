import { file_read_buffer_try } from "./file_read_buffer_try.mjs";
import { bytes_text_try } from "./bytes_text_try.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { text_lines_search } from "./text_lines_search.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function file_lines_search(f_path, s) {
  "The lines of this one file that hold this word, each one given back with the file it came from and the place it sits at";
  "A file that is not there, and a file that was never text, both come back as nothing found. Neither is an error to raise: searching asks a question of whatever is there, and the honest answer about a picture is that it holds no lines, not that the search failed. Raising instead would mean a single unreadable thing anywhere under a folder stopped the whole sweep, which is the opposite of what somebody searching wants.";
  "Whether it was ever text is decided by trying to read it as text, and it is the same read - one attempt answers the question and gives back the thing being searched. Asking first and reading afterwards would read every file twice, and would also have to ask the question of something other than the bytes, which is where the earlier version went wrong: it looked for the stand-in character the reader leaves behind, and so declared any file that legitimately mentions that character - a file about encodings, or the one that names it - to be a picture, and dropped it out of every search without a word.";
  "Every record carries its own file even though the caller just named one. A record that describes itself can be put in a pile with records from anywhere else and still be understood, which is what lets the folder-wide search be almost nothing more than this one repeated.";
  arguments_assert(arguments, 2);
  let bytes = await file_read_buffer_try(f_path);
  let missing = not(bytes);
  if (missing) {
    let none = [];
    return none;
  }
  let contents = bytes_text_try(bytes);
  let unreadable = not(contents);
  if (unreadable) {
    let none = [];
    return none;
  }
  let found = text_lines_search(contents, s);
  let placed = [];
  for (let one of found) {
    let number = property_get(one, "number");
    let line = property_get(one, "line");
    let record = {
      f_path,
      number,
      line,
    };
    list_add(placed, record);
  }
  return placed;
}
