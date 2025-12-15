import { app_api_cache_storage_local_fn } from "../../../love/public/src/app_api_cache_storage_local_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_sort_string } from "../../../love/public/src/list_sort_string.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
export async function folder_read_files(path_folder) {
  if (browser_is()) {
    let r = await app_api_cache_storage_local_fn(folder_read_files, arguments);
    return r;
  }
  let fs = await import("fs");
  marker("1");
  function lambda(file) {
    let result = path_join([path_folder, file]);
    let v = fs.statSync(result).isFile();
    return v;
  }
  const all = fs.readdirSync(path_folder);
  let files = all.filter(lambda);
  list_sort_string(files);
  return files;
}
