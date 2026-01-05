import { file_delete } from "../../../love/public/src/file_delete.mjs";
import { invoke_cache_file_key_get } from "../../../love/public/src/invoke_cache_file_key_get.mjs";
export async function invoke_cache_file_clear(fn, args) {
  let key_get = invoke_cache_file_key_get(fn, args);
  let k = key_get();
  await file_delete(k);
}
