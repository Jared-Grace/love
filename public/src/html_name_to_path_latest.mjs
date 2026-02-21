import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
import { app_shared_name_latest_text } from "../../../love/public/src/app_shared_name_latest_text.mjs";
import { html_name_to_path_folder } from "../../../love/public/src/html_name_to_path_folder.mjs";
export function html_name_to_path_latest(name) {
  let fn = file_name_html;
  const folder = app_shared_name_latest_text();
  let file_path = html_name_to_path_folder(name, folder, fn);
  return file_path;
}
