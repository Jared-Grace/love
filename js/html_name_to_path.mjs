import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
export function html_name_to_path(name) {
  let file_name = file_name_html(name);
  let file_path = folder_public_combine(file_name);
  return file_path;
}
