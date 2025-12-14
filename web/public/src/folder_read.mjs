import { app_api_cache_global } from "../../../love/public/src/app_api_cache_global.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_read(path_folder) {
  marker("1");
  let fs = await import("fs");
  const all = await fs.promises.readdir(path_folder);
  return all;
  if (browser_is()) {
    let function_name = folder_read.name;
    let r = await app_api_cache_global(function_name, [path_folder]);
    return r;
  }
}
