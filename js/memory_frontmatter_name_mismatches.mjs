import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { memory_frontmatter_field } from "./memory_frontmatter_field.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function memory_frontmatter_name_mismatches() {
  "Every memory file whose header names it something other than its own file name. The two are supposed to be one identity: the instructions say a double-bracket link names another note's header name, while the checks that resolve those links match them against file names, so where the two disagree the written instruction points at nothing. Read-only.";
  "The index is left out, because it is the list of notes rather than a note, and it carries no header at all.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let index_name = "MEMORY.md";
  let suffix = ".md";
  let mismatches = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let is_index = equal(name, index_name);
    if (is_index) {
      continue;
    }
    let path = path_join([folder, name]);
    let text = await file_read(path);
    let declared = memory_frontmatter_field(text, "name");
    let expected = text_suffix_without(name, suffix);
    let same = equal(declared, expected);
    if (not(same)) {
      list_add(mismatches, {
        file: name,
        declared,
        expected,
      });
    }
  }
  return mismatches;
}
