import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
export async function storage_function_folder_rename_check(f_name_after) {
  "Refuses a rename before it starts when the new name already has a store of its own on this disk.";
  "Two stores under one name cannot be merged by anything here, because nothing knows which of two files of the same name is the one still being read. So the only safe answers are to move the folder or to leave the rename undone, and this picks the second.";
  "It has to run before the code is renamed, not after. A rename that succeeds in the code and then fails on the data leaves the worse of the two states - every caller pointing at the new name, the data sitting under the old one - and that state is harder to get out of than not having renamed at all.";
  arguments_assert(arguments, 1);
  let folder = storage_function_folder_path(f_name_after);
  await file_exists_not_assert_json(folder, {
    hint: "the new name already has stored files of its own, so renaming would put two functions' stores under one name - move or clear that folder first, or pick a different name",
    folder,
  });
}
