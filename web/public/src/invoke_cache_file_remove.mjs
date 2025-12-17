import { cache_remove_generic } from "../../../love/public/src/cache_remove_generic.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_delete } from "./file_delete.mjs";
export async function invoke_cache_file_remove(fn, args) {
  marker("1");
  let key_get = invoke_cache_file_key_get(fn, args);
  let cached_exists = file_exists;
  let cache_remove = file_delete;
  await cache_remove_generic(key_get, cached_exists, cache_remove);
}
