import { lock_folder_path } from "./lock_folder_path.mjs";
import { import_install } from "./import_install.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
export async function lock_held_is(lock_name) {
  "whether something holds this lock right now - the one honest answer to 'has that other run finished yet', so a caller waiting to take a turn can ask instead of guessing from what it finds on disk";
  "the `owner` file beside the lock is NOT the answer, and reading it is the trap this function exists to close: it is written when the lock is taken and never removed when it is let go, so it names the last holder forever. a wait that ends when `owner` disappears never ends. this asks the lock itself, which also knows a holder that died without letting go";
  let folder = lock_folder_path(lock_name);
  let exists = await file_exists(folder);
  if (not(exists)) {
    ("nothing has ever taken this lock, so nothing is holding it");
    return false;
  }
  let lockfile = await import_install("proper-lockfile");
  let held = await lockfile.check(folder);
  return held;
}
