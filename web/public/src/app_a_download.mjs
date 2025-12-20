import { html_extension } from "../../../love/public/src/html_extension.mjs";
import { list_filter_ends_with_any } from "../../../love/public/src/list_filter_ends_with_any.mjs";
import { function_name_extension } from "../../../love/public/src/function_name_extension.mjs";
import { folder_read_recursive_paths_async } from "../../../love/public/src/folder_read_recursive_paths_async.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_a_download() {
  marker("1");
  let path_folder = folder_public();
  let combineds = await folder_read_recursive_paths_async(path_folder);
  let ext = function_name_extension();
  let v = html_extension();
  let filtered = list_filter_ends_with_any(combineds, [ext, v]);
  return filtered;
}
