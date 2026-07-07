import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_storage_function_path } from "../../../love/public/src/folder_user_storage_function_path.mjs";
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
    let result = path_join([f_path, lock_name]);
    release = await lockfile.lock(result);
  } finally {
    if (release) {
      await release();
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
