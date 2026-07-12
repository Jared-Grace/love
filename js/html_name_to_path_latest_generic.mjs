import { html_name_to_path_folder } from "./html_name_to_path_folder.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
export function html_name_to_path_latest_generic(name, fn) {
  let folder = app_shared_name_latest_text();
  let file_path = html_name_to_path_folder(folder, name, fn);
  return file_path;
}
