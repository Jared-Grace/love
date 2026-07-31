import { memory_index_name } from "./memory_index_name.mjs";
import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { memory_types } from "./memory_types.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { memory_frontmatter_field } from "./memory_frontmatter_field.mjs";
import { list_add } from "./list_add.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function memory_frontmatter_defects() {
  "Every memory note whose header fails one of the things the memory instructions require of it: a name that is the file's own name, a description that says what the note is for, and a kind drawn from the four that exist. Read-only.";
  "The header is the only part of a note that other tooling reads. A wrong name breaks the identity links resolve against, a missing description leaves a session unable to tell whether the note is worth opening, and an invented kind is a convention drifting where nobody will see it.";
  "One sweep serves both the report and the repair, so the two cannot come to disagree about what a fault is.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let index_name = memory_index_name();
  let suffix = ".md";
  let types = memory_types();
  let defects = [];
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
    let expected = text_suffix_without(name, suffix);
    let declared = memory_frontmatter_field(text, "name");
    let named_right = equal(declared, expected);
    if (not(named_right)) {
      list_add(defects, {
        file: name,
        kind: "name",
        declared,
        expected,
      });
    }
    let description = memory_frontmatter_field(text, "description");
    let described = text_empty_is(description);
    if (described) {
      list_add(defects, {
        file: name,
        kind: "description",
        declared: description,
        expected,
      });
    }
    let type = memory_frontmatter_field(text, "type");
    let known = list_includes(types, type);
    if (not(known)) {
      list_add(defects, {
        file: name,
        kind: "type",
        declared: type,
        expected,
      });
    }
  }
  return defects;
}
