import { list_map_unique } from "./list_map_unique.mjs";
import { global_function_property_cache } from "./global_function_property_cache.mjs";
import { text_split_first } from "./text_split_first.mjs";
import { list_map_prefix_without } from "./list_map_prefix_without.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { app_a_files_paths } from "./app_a_files_paths.mjs";
import { text_slash_forward } from "./text_slash_forward.mjs";
import { path_normalize } from "./path_normalize.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function folder_read_browser(path_folder) {
  let files_paths = await app_a_files_paths();
  let r = global_function_property_cache(
    folder_read_browser,
    path_folder,
    files_paths,
    value_get,
  );
  return r;
  function value_get() {
    let n = path_normalize(path_folder);
    let s = text_slash_forward();
    let prefix = text_combine_multiple([n, s]);
    let filtered = list_filter_starts_with(files_paths, prefix);
    let mapped = list_map_prefix_without(filtered, prefix);
    function lambda(item) {
      let first = text_split_first(item, s);
      return first;
    }
    let unique = list_map_unique(mapped, lambda);
    let r = {
      unique,
      prefix,
      filtered,
    };
    return r;
  }
}
