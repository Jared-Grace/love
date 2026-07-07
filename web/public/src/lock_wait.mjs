import { not } from "../../../love/public/src/not.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { folder_exists_ensure } from "../../../love/public/src/folder_exists_ensure.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function lock_wait(lock_name, lambda) {
  let wait = true;
  let lockfile = await import_install("proper-lockfile");
  let f_path = folder_user_storage_function_path(lock_wait);
  let result = path_join([f_path, lock_name]);
  await folder_exists_ensure(result);
  let release = null;
  let r = null;
  try {
    let notified = false;
    while (wait) {
      try {
        release = await lockfile.lock(result);
        break;
      } catch (e) {
        if (e.code !== "ELOCKED") {
          throw e;
        }
        if (not(notified)) {
          log_keep(lock_wait.name, "waiting on " + result + " to be unlocked");
          notified = true;
        }
        await sleep(200);
      }
    }
    r = await lambda();
  } finally {
    if (release) {
      await release();
    }
  }
  return r;
}
