import { app_api_cache_storage_local_fn } from "../../../love/public/src/app_api_cache_storage_local_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_read(path_folder) {
  if (browser_is()) {
    let r = await app_api_cache_storage_local_fn(folder_read, arguments);
    return r;
  }
  marker("1");
  let fs = await import("fs");
  const all = await fs.promises.readdir(path_folder);
  return all;
}
