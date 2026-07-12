import { error_combine_multiple } from "./error_combine_multiple.mjs";
import { invoke_cache_file_exists } from "./invoke_cache_file_exists.mjs";
export async function invoke_cache_file_exists_throw(fn, args) {
  let e = await invoke_cache_file_exists(fn, args);
  if (e) {
    error_combine_multiple([invoke_cache_file_exists.name, " returned ", e]);
  }
}
