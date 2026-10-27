import { folder_js } from "./folder_js.mjs";
import { repo_love_path } from "./repo_love_path.mjs";
import { folder_read_recursive_skipped_paths_async } from "./folder_read_recursive_skipped_paths_async.mjs";
import { function_name_extension } from "./function_name_extension.mjs";
import { html_extension } from "./html_extension.mjs";
import { json_extension } from "./json_extension.mjs";
import { list_filter_ends_with_any } from "./list_filter_ends_with_any.mjs";
import { data_aliases_path } from "./data_aliases_path.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { list_concat } from "./list_concat.mjs";
export async function app_a_download_paths() {
  "Only this repo's code folder is handed to the page. Every repo's code, pages and data together came to fourteen gigabytes once tools began leaving their output beside the code, and the page's first load never finished asking for it.";
  let js = folder_js();
  let path_folder = repo_love_path(js);
  let combineds = await folder_read_recursive_skipped_paths_async(path_folder, [
    "node_modules",
    ".git",
  ]);
  let ext_f = function_name_extension();
  let ext_h = html_extension();
  let ext_j = json_extension();
  let filtered = list_filter_ends_with_any(combineds, [ext_f, ext_h, ext_j]);
  ("The editor reads the short names for functions while opening one, and that record sits in the settings folder beside the code, so that small folder travels too.");
  let aliases = data_aliases_path();
  let settings = await path_dirname(aliases);
  let path_settings = repo_love_path(settings);
  let settings_paths = await folder_read_recursive_skipped_paths_async(
    path_settings,
    [],
  );
  let concated = list_concat(filtered, settings_paths);
  return concated;
}
