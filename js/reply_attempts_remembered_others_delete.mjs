import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { reply_attempts_remembered_root } from "./reply_attempts_remembered_root.mjs";
import { file_exists } from "./file_exists.mjs";
import { folder_read } from "./folder_read.mjs";
import { folder_delete } from "./folder_delete.mjs";
import { path_join } from "./path_join.mjs";
export async function reply_attempts_remembered_others_delete(code_hash) {
  arguments_assert(arguments, 1);
  ("Take away the answers kept for every version of the reply rules' code except this one. An answer kept under older code is never asked for again, because the code it was worked out by is gone; left alone they would pile up one folder per change to the rules.");
  let folder = reply_attempts_remembered_root();
  let present = await file_exists(folder);
  if (not(present)) {
    return;
  }
  let names = await folder_read(folder);
  for (let name of names) {
    if (equal(name, code_hash)) {
      continue;
    }
    let folder_path = path_join([folder, name]);
    await folder_delete(folder_path);
  }
}
