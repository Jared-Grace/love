import { folder_public_join } from "./folder_public_join.mjs";
import { file_name_html } from "./file_name_html.mjs";
export function html_name_to_path(name) {
  let file_name = file_name_html(name);
  let file_path = folder_public_join(file_name);
  return file_path;
}
