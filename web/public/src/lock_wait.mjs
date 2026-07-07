import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { lock_wait_cacher } from "../../../love/public/src/lock_wait_cacher.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
export async function lock_wait(lock_name, lambda) {
  let fn = lock_wait_cacher;
  const args = [lock_name];
  let key_get = invoke_cache_file_key_get(fn, args);
  let cached_exists = file_exists;
  await invoke_cache_file(fn, args);
  await lambda();
  await invoke_cache_file_remove(fn, args);
}
