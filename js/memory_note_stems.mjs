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
  "The index is not a note and carries no header, so nothing links to it and it is left out - which the reader of note names already knows.";
  let names = await memory_note_names();
  let suffix = ".md";
  function stem_of(name) {
    let stem = text_suffix_without(name, suffix);
    return stem;
  }
  let stems = list_map(names, stem_of);
  return stems;
}
