import { cache_remove_generic } from "./cache_remove_generic.mjs";
import { invoke_cache_file_key_get } from "./invoke_cache_file_key_get.mjs";
import { file_exists } from "./file_exists.mjs";
import { file_delete } from "./file_delete.mjs";
export async function invoke_cache_file_remove(fn, args) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let cached_exists = file_exists;
  let cache_remove = file_delete;
  await cache_remove_generic(key_get, cached_exists, cache_remove);
}
