import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_suffix } from "./js_file_suffix.mjs";
import { text_remove_end } from "./text_remove_end.mjs";
export function js_file_fn_name(file) {
  "$plain file";
  "The name of the function living in a file, given the file's own name - the way back from a file to the thing it holds.";
  "One function to a file is the whole layout of this folder, so a reading that found files can hand its answer to anything that works by name, and neither half has to know how the other spells the same thing.";
  arguments_assert(arguments, 1);
  let suffix = js_file_suffix();
  let f_name = text_remove_end(file, suffix.length);
  return f_name;
}
