import { import_install } from "./import_install.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { lock_generic } from "./lock_generic.mjs";
export async function lock_held_is(lock_name) {
  "whether something holds this lock right now - the one honest answer to 'has that other run finished yet', so a caller waiting to take a turn can ask instead of guessing from what it finds on disk";
  "the `owner` file beside the lock is NOT the answer, and reading it is the trap this function exists to close: it is written when the lock is taken and never removed when it is let go, so it names the last holder forever. a wait that ends when `owner` disappears never ends. this asks the lock itself, which also knows a holder that died without letting go";
  let f_path = folder_user_storage_function_path(lock_generic);
  let folder = path_join([f_path, lock_name]);
  let exists = await file_exists(folder);
  if (not(exists)) {
    ("nothing has ever taken this lock, so nothing is holding it");
    return false;
  }
  let lockfile = await import_install("proper-lockfile");
  let held = await lockfile.check(folder);
  return held;
}
