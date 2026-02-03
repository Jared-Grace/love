import { invoke_cache_file_remove } from "../../../love/public/src/invoke_cache_file_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function invoke_cache_file_remove_if_exists(fn, args) {
  marker("1");
  let v = await invoke_cache_file_remove(fn, args);
  return v;
}
