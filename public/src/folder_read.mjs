import { app_a_files_paths } from "../../../love/public/src/app_a_files_paths.mjs";
import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { app_api_cache_storage_local_fn } from "../../../love/public/src/app_api_cache_storage_local_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_read(path_folder) {
  if (browser_is()) {
    let files_paths = await app_a_files_paths();
    let n = path_normalize(path_folder);
    let r = await app_api_cache_storage_local_fn(folder_read, arguments);
    return r;
  }
  marker("1");
  let fs = await import("fs");
  const all = await fs.promises.readdir(path_folder);
  return all;
}
