import { retry_wait_until_success } from "./retry_wait_until_success.mjs";
import { invoke_cache_file_exists_throw } from "./invoke_cache_file_exists_throw.mjs";
export async function invoke_cache_file_exists_not_wait(fn, args) {
  async function lambda() {
    await invoke_cache_file_exists_throw(fn, args);
  }
  await retry_wait_until_success(lambda);
}
