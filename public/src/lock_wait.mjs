import { npm_install } from "../../../love/public/src/npm_install.mjs";
import { invoke_cache_file_exists_not_wait } from "../../../love/public/src/invoke_cache_file_exists_not_wait.mjs";
import { lock_wait_cacher } from "../../../love/public/src/lock_wait_cacher.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
export async function lock_wait(lock_name, lambda) {
  await npm_install("proper-lockfile");
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
