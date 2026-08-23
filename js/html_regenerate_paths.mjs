import { html_regenerate_folders } from "./html_regenerate_folders.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { html_extension } from "./html_extension.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_squash } from "./list_squash.mjs";
export async function html_regenerate_paths() {
  "Where every page that might have been generated sits, across both folders, each one spelled the whole way rather than as a name inside a folder somebody has to remember.";
  let folders = html_regenerate_folders();
  async function folder_paths(folder) {
    let files = await folder_read_files(folder);
    let suffix = html_extension();
    let names = list_filter_ends_with(files, suffix);
    function name_path(name) {
      let joined = path_join([folder, name]);
      return joined;
    }
    let inside = list_map(names, name_path);
    return inside;
  }
  let mapped = await list_map_unordered_async(folders, folder_paths);
  let squashed = list_squash(mapped);
  return squashed;
}
