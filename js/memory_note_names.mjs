import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { memory_index_name } from "./memory_index_name.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function memory_note_names() {
  "the file name of every memory note, which is every markdown file in the memory folder apart from the index. Read-only.";
  "the index is not a note - it carries no header, nothing links to it, and every check over the notes has to leave it out - so three sweeps each opened by reading the folder and then filtering it the same two ways, and the reason for the second filter was written out three times.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let index_name = memory_index_name();
  let suffix = ".md";
  let notes = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let is_index = equal(name, index_name);
    if (is_index) {
      continue;
    }
    list_add(notes, name);
  }
  return notes;
}
