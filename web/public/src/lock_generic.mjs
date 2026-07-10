import { not } from "../../../love/public/src/not.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function lock_generic(lock_name, wait, lambda) {
  let lockfile = await import_install("proper-lockfile");
  let f_path = folder_user_storage_function_path(lock_generic);
  let result = path_join([f_path, lock_name]);
  await folder_exists_ensure(result);
  let release = null;
  let r = null;
  try {
    let locked = false;
    let notified = false;
    do {
      try {
        release = await lockfile.lock(result);
        locked = true;
        break;
      } catch (e) {
        if (e.code !== "ELOCKED") {
          throw e;
        }
        if (not(notified)) {
          let message = null;
          if (wait) {
            message = text_combine_multiple([
              "waiting on ",
              result,
              " to be unlocked",
            ]);
          } else {
            message = text_combine(result, " is locked, skipping");
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
      r = await lambda();
    }
  } finally {
    if (release) {
      await release();
    }
  }
  return r;
}
