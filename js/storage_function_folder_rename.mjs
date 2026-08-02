import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_move } from "./file_move.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { storage_function_folder_path } from "./storage_function_folder_path.mjs";
export async function storage_function_folder_rename(
  f_name_before,
  f_name_after,
) {
  "Moves a function's stored files to follow its new name.";
  "The folder is named after the function and nothing else points at it, so a rename that moved only the code would leave the new name reading an empty folder while every past write sat under the old one. Moving the folder is what makes the rename behaviour-preserving again, which is what a rename is supposed to be.";
  "Nothing to move is the ordinary case and not a problem: most functions never store anything, and a machine that does not have the storage volume mounted holds none of the data either. Both answer the same way here, which is honest - there is no folder, so there is nothing this rename can lose.";
  "Local only, and that is the whole of what it fixes. A function name written into a remote path escapes to a disk this cannot reach, and no move here follows it.";
  arguments_assert(arguments, 2);
  let before = storage_function_folder_path(f_name_before);
  let present = await file_exists(before);
  if (not(present)) {
    return;
  }
  let after = storage_function_folder_path(f_name_after);
  await file_move(before, after);
  let told = text_combine_multiple([
    "moved the stored files from ",
    before,
    " to ",
    after,
  ]);
  console.log(told);
}
