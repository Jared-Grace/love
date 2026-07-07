import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
import { error } from "../../../love/public/src/error.mjs";
import { npm_install } from "../../../love/public/src/npm_install.mjs";
import { invoke_cache_file_exists_not_wait } from "../../../love/public/src/invoke_cache_file_exists_not_wait.mjs";
import { lock_wait_cacher } from "../../../love/public/src/lock_wait_cacher.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
export async function lock_wait(lock_name, lambda) {
  let lockfile = await npm_install("proper-lockfile");
  let release = null;
  try {
    let f_path = folder_user_storage_function_path(lock_wait);
    release = await lockfile.lock("some/file");
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
  let run = false;
  async function lambda2() {
    await invoke_cache_file_exists_not_wait(fn, args);
    run = true;
  }
  let fn = lock_wait_cacher;
  const args = [lock_name];
  if (run) {
    await invoke_cache_file(fn, args);
    await lambda();
    await invoke_cache_file_remove(fn, args);
  }
}
