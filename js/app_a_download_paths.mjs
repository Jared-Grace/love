import { folder_read_recursive_skipped_paths_async } from "./folder_read_recursive_skipped_paths_async.mjs";
import { json_extension } from "./json_extension.mjs";
import { repos_folder } from "./repos_folder.mjs";
import { list_filter_ends_with_any } from "./list_filter_ends_with_any.mjs";
import { html_extension } from "./html_extension.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
export async function app_a_download_paths() {
  let path_folder = repos_folder();
  let combineds = await folder_read_recursive_skipped_paths_async(path_folder, [
    "node_modules",
    ".git",
  ]);
  let ext_f = function_name_extension();
  let ext_h = html_extension();
  let ext_j = json_extension();
  let filtered = list_filter_ends_with_any(combineds, [ext_f, ext_h, ext_j]);
  return filtered;
}
