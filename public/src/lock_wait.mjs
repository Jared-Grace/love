import { retry_until_success } from "../../../love/public/src/retry_until_success.mjs";
import { invoke_cache_file_exists } from "../../../love/public/src/invoke_cache_file_exists.mjs";
import { lock_wait_cacher } from "../../../love/public/src/lock_wait_cacher.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
export async function lock_wait(lock_name, lambda) {
  let fn = lock_wait_cacher;
  const args = [lock_name];
  async function lambda3() {}
  let r = await retry_until_success(lambda3);
  let e = await invoke_cache_file_exists(fn, args);
  if (false) {
  }
  await invoke_cache_file(fn, args);
  await lambda();
  await invoke_cache_file_remove(fn, args);
}
