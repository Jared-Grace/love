import { error } from "../../../love/public/src/error.mjs";
import { invoke_cache_file_exists } from "../../../love/public/src/invoke_cache_file_exists.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function invoke_cache_file_exists_throw(fn, args) {
  let e = await invoke_cache_file_exists(fn, args);
  if (e) {
    let combined = text_combine_multiple([
      invoke_cache_file_exists.name,
      " returned ",
      e,
    ]);
    error(combined);
  }
}
