import { global_function_property_cache } from "../../../love/public/src/global_function_property_cache.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { string_split_first } from "../../../love/public/src/string_split_first.mjs";
import { list_map_prefix_without } from "../../../love/public/src/list_map_prefix_without.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { app_a_files_paths } from "../../../love/public/src/app_a_files_paths.mjs";
import { text_slash_forward } from "../../../love/public/src/text_slash_forward.mjs";
import { path_normalize } from "../../../love/public/src/path_normalize.mjs";
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
    let prefix = "" + n + s;
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
}
