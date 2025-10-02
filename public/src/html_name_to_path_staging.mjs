import { html_name_to_path_folder } from "../../../love/public/src/html_name_to_path_folder.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function html_name_to_path_staging(name) {
  marker("1");
  const folder = "staging";
  let file_path = html_name_to_path_folder(name, folder);
  return file_path;
}
