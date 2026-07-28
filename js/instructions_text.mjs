import { instructions_paths } from "./instructions_paths.mjs";
import { file_read } from "./file_read.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_new_line } from "./list_join_new_line.mjs";
export async function instructions_text() {
  "The whole of the instructions as one piece of text, however many files they are written across.";
  "Everything that checks the instructions wants all of them and does not care which file a line sits in - so this is what those checks read, and moving a section between files stops being able to break any of them. Only a reader that genuinely cares about the always-loaded file, such as the one weighing it, should open that file by name.";
  let paths = await instructions_paths();
  let parts = [];
  for (let f_path of paths) {
    let text = await file_read(f_path);
    list_add(parts, text);
  }
  let joined = list_join_new_line(parts);
  return joined;
}
