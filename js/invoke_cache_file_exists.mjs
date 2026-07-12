import { file_exists } from "./file_exists.mjs";
import { invoke_cache_file_key_get } from "./invoke_cache_file_key_get.mjs";
export async function invoke_cache_file_exists(fn, args) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let cached_exists = file_exists;
  let key = await key_get();
  let e = await cached_exists(key);
  return e;
}
