import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { string_slash_forward } from "../../../love/public/src/string_slash_forward.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_files_paths } from "../../../love/public/src/app_a_files_paths.mjs";
import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
import { app_api_cache_storage_local_fn } from "../../../love/public/src/app_api_cache_storage_local_fn.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function folder_read(path_folder) {
  if (browser_is()) {
    let n = path_normalize(path_folder);
    let s = string_slash_forward();
    let prefix = "" + n + s;
    let files_paths = await app_a_files_paths();
    let filtered = list_filter_starts_with(files_paths, prefix);
    let mapped = list_map_prefix_without(filtered, prefix);
    let mapped2 = list_map(list, function lambda(item) {});
    log({
      n,
      files_paths,
    });
    let r = await app_api_cache_storage_local_fn(folder_read, arguments);
    return r;
  }
  marker("1");
  let fs = await import("fs");
  const all = await fs.promises.readdir(path_folder);
  return all;
}
