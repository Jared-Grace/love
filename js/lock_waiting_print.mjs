import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { log_keep } from "./log_keep.mjs";
export async function lock_waiting_print(owner_path, lock_folder, wait) {
  "$plain owner_path";
  "$plain lock_folder";
  "$plain wait";
  arguments_assert(arguments, 3);
  ("Says out loud that this run is not going ahead yet, and names whoever it is behind.");
  ("There are two ways to be held up - the lock is taken, or somebody arrived before you - and they read the same to whoever is watching a run that has stopped printing. So they say the same thing, in one place, and neither can grow a sentence the other lacks.");
  ("Who holds it is read rather than remembered, and read gently: the note naming them is written by somebody else and may be half written or not yet there at all, and that is no reason to stop a run that is only trying to explain itself.");
  async function lambda_owner() {
    let read = await file_read_try(owner_path);
    return read;
  }
  let owner = await catch_null_async(lambda_owner);
  let owner_suffix = owner ? text_combine(" held by ", owner) : "";
  let message = null;
  if (wait) {
    message = text_combine_multiple([
      "waiting on ",
      lock_folder,
      " to be unlocked",
      owner_suffix,
    ]);
  } else {
    message = text_combine_multiple([
      lock_folder,
      " is locked, skipping",
      owner_suffix,
    ]);
  }
  ("It speaks under its own name rather than the caller's. Naming the caller was tried and the pass that tidies these files kept turning it back, since a function's own name is the one thing it can always be sure of - and a line of log saying which piece of code spoke is better served by a name that cannot go stale than by one chosen to look familiar");
  log_keep(lock_waiting_print.name, message);
}
