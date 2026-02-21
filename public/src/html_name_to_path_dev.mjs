import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
import { html_name_to_path_folder } from "../../../love/public/src/html_name_to_path_folder.mjs";
export function html_name_to_path_dev(name) {
  const folder = "dev";
  let file_path = html_name_to_path_folder(name, folder, file_name_html);
  return file_path;
}
