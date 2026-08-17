import { folders_function_named_roots } from "./folders_function_named_roots.mjs";
import { path_base } from "./path_base.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { function_exists } from "./function_exists.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function folders_function_named_orphaned() {
  arguments_assert(arguments, 0);
  ("Every folder of stored data named after a function that no function answers to any more.");
  ("A function handed to ",
    fn_name("local_function_folder"),
    " has its own name written into a folder path on user storage, so the name is a value that has already left the repo. Renaming that function is behavior-preserving in the code and silently walks away from the data: the new name reads an empty folder while every past write sits under the old one, and nothing about the rename says so. Measured case - text_to_uuid_set left a data.json behind and ",
    fn_name("text_to_uuid_save"),
    " carried on beside it.");
  ("Asking the disk rather than keeping a list is what makes this stay true. A new store writes its folder the first time it runs, so it is watched from then on without anybody remembering to record it, and the question is asked of what actually escaped rather than of what somebody believed had.");
  ("Nothing to report when the storage folder is not mounted, which is the honest answer there - a machine holding none of the data has no data to walk away from.");
  ("Every folder whose children are named after a function is walked, not only the store of remembered answers. The handover folder somebody authors chapters into by hand is named the same way and was watched by nothing, so a rename walking away from an authored chapter reported clean - which is the one failure this exists to refuse.");
  ("What comes back is the folder it sits in and then the name, so two folders holding the same dead name are two things to clear rather than one, and whoever reads the answer is told where to go without having to guess which folder it means.");
  let roots = folders_function_named_roots();
  let orphaned = [];
  for (let root of roots) {
    let present = await file_exists(root);
    if (not(present)) {
      continue;
    }
    let names = await folder_read(root);
    let folder_said = path_base(root);
    for (let name of names) {
      let searched = await function_exists(name);
      ("the answer is a record of the search rather than a yes or no, and the record itself is always there - so reading it as a yes is a check that passes on every name, which is what this did before the property was read");
      let live = property_get(searched, "exists");
      if (live) {
        continue;
      }
      let spelled = path_join([folder_said, name]);
      list_add(orphaned, spelled);
    }
  }
  orphaned.sort();
  return orphaned;
}
