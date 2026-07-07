import { error_combine_multiple } from "../../../love/public/src/error_combine_multiple.mjs";
import { invoke_cache_file_exists } from "../../../love/public/src/invoke_cache_file_exists.mjs";
export async function invoke_cache_file_exists_throw(fn, args) {
  let e = await invoke_cache_file_exists(fn, args);
  if (e) {$a
    const list = [invoke_cache_file_exists.name, " returned ", e];
    error_combine_multiple(list);
  }
}
