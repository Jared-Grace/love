import { memory_folder } from "./memory_folder.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { memory_fn_reference_tokens } from "./memory_fn_reference_tokens.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function memory_fn_references_unresolved() {
  "Every marked pointer in memory that names no live function, with the note it was written in. A marker is a claim that the name is real, so unlike a bare mention there is nothing to weigh up here - the claim either holds or it does not. Read-only.";
  "Quoted code is kept rather than stripped, the opposite of what the double-bracket check does. There the backticks meant an example was being shown; here the marker is meant to be written inside them, so throwing the quotes away would throw away every pointer.";
  let folder = memory_folder();
  let names = await folder_read_files(folder);
  let fn_names = await functions_names();
  let suffix = ".md";
  let unresolved = [];
  for (let name of names) {
    let is_md = text_ends_with(name, suffix);
    if (not(is_md)) {
      continue;
    }
    let path = path_join([folder, name]);
    let text = await file_read(path);
    let tokens = memory_fn_reference_tokens(text);
    for (let token of tokens) {
      let missing = list_includes_not(fn_names, token);
      if (missing) {
        let one = {
          name: token,
          note: name,
        };
        list_add(unresolved, one);
      }
    }
  }
  return unresolved;
}
