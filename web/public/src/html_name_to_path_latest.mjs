import { html_name_to_path_latest_generic } from "../../../love/public/src/html_name_to_path_latest_generic.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
export function html_name_to_path_latest(name) {
  let fn = file_name_html;
  let file_path = html_name_to_path_latest_generic(name, fn);
  return file_path;
}
