import { lock_options } from "./lock_options.mjs";
import { lock_folder_path } from "./lock_folder_path.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { not } from "./not.mjs";
import { log_keep } from "./log_keep.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_join } from "./path_join.mjs";
import { sleep } from "./sleep.mjs";
import { import_install } from "./import_install.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function lock_generic(lock_name, wait, lambda, who) {
  let lockfile = await import_install("proper-lockfile");
  let result = lock_folder_path(lock_name);
  await folder_exists_ensure(result);
  let owner_path = path_join([result, "owner"]);
  let release = null;
  let r = null;
  try {
    let locked = false;
    let notified = false;
    do {
      try {
        let r3 = lock_options();
        release = await lockfile.lock(result, r3);
        locked = true;
        break;
      } catch (e) {
        if (not_equal(e.code, "ELOCKED")) {
          throw e;
        }
        if (not(notified)) {
          async function lambda_owner() {
            let r2 = await file_read_try(owner_path);
            return r2;
          }
          let owner = await catch_null_async(lambda_owner);
          let owner_suffix = owner ? text_combine(" held by ", owner) : "";
          let message = null;
          if (wait) {
            message = text_combine_multiple([
              "waiting on ",
              result,
              " to be unlocked",
              owner_suffix,
            ]);
          } else {
            message = text_combine_multiple([
              result,
              " is locked, skipping",
              owner_suffix,
            ]);
          }
          log_keep(lock_generic.name, message);
          notified = true;
        }
        if (wait) {
          await sleep(200);
        }
      }
    } while (wait);
    if (locked) {
      await file_overwrite(owner_path, who ? who : "unknown");
      r = await lambda();
    }
  } finally {
    if (release) {
      ("Giving the lock back is allowed to fail quietly, and only for one reason: if the lock was already declared lost while the work was running, handing it back is refused, and that refusal would be thrown from here - out of a finally, on top of whatever the work itself was returning or complaining about. The work is the thing worth hearing. A lock nobody holds any more needs no giving back");
      async function lambda_release() {
        let r2 = await release();
        return r2;
      }
      await catch_null_async(lambda_release);
    }
  }
  return r;
}
