import { list_map } from "../../../love/public/src/list_map.mjs";
import { json_extension } from "../../../love/public/src/json_extension.mjs";
import { repos_folder } from "../../../love/public/src/repos_folder.mjs";
import { list_filter_ends_with_any } from "../../../love/public/src/list_filter_ends_with_any.mjs";
import { html_extension } from "../../../love/public/src/html_extension.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { folder_read_recursive_paths_async } from "../../../love/public/src/folder_read_recursive_paths_async.mjs";
export async function app_a_download_paths() {
  let path_folder = repos_folder();
  let combineds = await folder_read_recursive_paths_async(path_folder);
  let ext_f = function_name_extension();
  let ext_h = html_extension();
  let ext_j = json_extension();
  let filtered = list_filter_ends_with_any(combineds, [ext_f, ext_h, ext_j]);
  let mapped = list_map(list, function lambda(item) {});
  return filtered;
}
