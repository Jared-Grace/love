import { html_name_to_path_folder } from "../../../love/public/src/html_name_to_path_folder.mjs";
import { app_shared_name_latest_text } from "../../../love/public/src/app_shared_name_latest_text.mjs";
export function html_name_to_path_latest_generic(name, fn) {
  const folder = app_shared_name_latest_text();
  let file_path = html_name_to_path_folder(name, folder, fn);
  return file_path;
}
