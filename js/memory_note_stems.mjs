import { memory_index_name } from "./memory_index_name.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function memory_note_stems() {
  "The name every memory note is known by - its file name without the suffix. This is the identity a double-bracket link is resolved against, so it is what any check on those links has to compare with. Read-only.";
  "The index is not a note and carries no header, so nothing links to it and it is left out.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let index_name = memory_index_name();
  let suffix = ".md";
  let stems = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let is_index = equal(name, index_name);
    if (is_index) {
      continue;
    }
    let stem = text_suffix_without(name, suffix);
    list_add(stems, stem);
  }
  return stems;
}
