import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache_file_remove_if_exists(fn, args) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let cached_exists = file_exists;
  let k = key_get();
  if (await cached_exists(k)) {
    await invoke_cache_file_remove(fn, args);
  }
}
