import { invoke_cache_file } from "../../../love/public/src/invoke_cache_file.mjs";
import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
export async function invoke_cache_file_refresh(fn, args) {
  await invoke_cache_file_remove(fn, args);
  let r = await invoke_cache_file(fn, args);
  return r;
}
