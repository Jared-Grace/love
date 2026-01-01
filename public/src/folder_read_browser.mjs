import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { global_function_initialize } from "../../../love/public/src/global_function_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_split_first } from "../../../love/public/src/string_split_first.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { app_a_files_paths } from "../../../love/public/src/app_a_files_paths.mjs";
import { string_slash_forward } from "../../../love/public/src/string_slash_forward.mjs";
import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
export async function folder_read_browser(path_folder) {
  marker("1");
  let value = global_function_initialize(folder_read_browser, 0);
  global_function_set(fn, value2);
  let n = path_normalize(path_folder);
  let s = string_slash_forward();
  let prefix = "" + n + s;
  let files_paths = await app_a_files_paths();
  let filtered = list_filter_starts_with(files_paths, prefix);
  let mapped = list_map_prefix_without(filtered, prefix);
  function lambda(item) {
    let first = string_split_first(item, s);
    return first;
  }
  let mapped2 = list_map(mapped, lambda);
  let unique = list_unique(mapped2);
  let r = {
    unique,
    prefix,
    filtered,
  };
  return r;
}
