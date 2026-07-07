import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { npm_install } from "../../../love/public/src/npm_install.mjs";
import { sleep } from "../../../love/public/src/sleep.mjs";
export async function lock_wait(lock_name, lambda) {
  let lockfile = await npm_install("proper-lockfile");
  let release = null;
  while (true) {
    try {
      let f_path = folder_user_storage_function_path(lock_wait);
      let result = path_join([f_path, lock_name]);
      release = await lockfile.lock(result);
      await lambda();
      break;
    } catch (e) {
      await sleep(200);
    } finally {
      if (release) {
        await release();
      }
    }
  }
}
