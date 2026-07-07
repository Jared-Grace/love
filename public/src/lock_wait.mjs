import { lock_wait_cacher } from "../../../love/public/src/lock_wait_cacher.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
export async function lock_wait(lock_name, lambda) {
  const args = [lock_name];
  await invoke_cache_file(lock_wait_cacher, args);
  await lambda();
  await invoke_cache_file_remove(fn, args);
}
