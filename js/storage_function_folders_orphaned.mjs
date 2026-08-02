import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { folder_user_storage_function_path_function } from "./folder_user_storage_function_path_function.mjs";
import { function_exists } from "./function_exists.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function storage_function_folders_orphaned() {
  arguments_assert(arguments, 0);
  ("Every folder of stored data named after a function that no function answers to any more.");
  ("A function handed to ",
    fn_name("local_function_folder"),
    " has its own name written into a folder path on user storage, so the name is a value that has already left the repo. Renaming that function is behavior-preserving in the code and silently walks away from the data: the new name reads an empty folder while every past write sits under the old one, and nothing about the rename says so. Measured case - text_to_uuid_set left a data.json behind and ",
    fn_name("text_to_uuid_save"),
    " carried on beside it.");
  ("Asking the disk rather than keeping a list is what makes this stay true. A new store writes its folder the first time it runs, so it is watched from then on without anybody remembering to record it, and the question is asked of what actually escaped rather than of what somebody believed had.");
  ("Nothing to report when the storage folder is not mounted, which is the honest answer there - a machine holding none of the data has no data to walk away from.");
  let path = folder_user_storage_function_path_function();
  let present = await file_exists(path);
  if (not(present)) {
    let none = [];
    return none;
  }
  let names = await folder_read(path);
  let orphaned = [];
  for (let name of names) {
    let searched = await function_exists(name);
    ("the answer is a record of the search rather than a yes or no, and the record itself is always there - so reading it as a yes is a check that passes on every name, which is what this did before the property was read");
    let live = property_get(searched, "exists");
    if (live) {
      continue;
    }
    list_add(orphaned, name);
  }
  orphaned.sort();
  return orphaned;
}
