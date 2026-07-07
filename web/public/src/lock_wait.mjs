import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { npm_install } from "../../../love/public/src/npm_install.mjs";
export async function lock_wait(lock_name, lambda) {
  let lockfile = await npm_install("proper-lockfile");
  let release = null;
  try {
    let f_path = folder_user_storage_function_path(lock_wait);
    let result = path_join([f_path, lock_name]);
    release = await lockfile.lock(result);
  } catch (e) {
    console.error(e);
  } finally {
    if (release) {
      try {
        await release();
      } catch (e) {
        console.error(e);
      }
    }
  }
}
