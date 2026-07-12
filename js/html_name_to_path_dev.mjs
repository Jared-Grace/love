import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { html_name_to_path_folder } from "./html_name_to_path_folder.mjs";
export function html_name_to_path_dev(name) {
  let folder = app_shared_name_dev_text();
  let file_path = html_name_to_path_folder(folder, name, file_name_html);
  return file_path;
}
