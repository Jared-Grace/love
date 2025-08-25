import { path_join } from "./path_join.mjs";
import { marker } from "./marker.mjs";
import { folder_public_combine } from "./folder_public_combine.mjs";
import { file_name_html } from "./file_name_html.mjs";
export function html_name_to_path_dev(name) {
  marker("1");
  let file_name = file_name_html(name);
  let joined = path_join(["dev", file_name]);
  let file_path = folder_public_combine(joined);
  return file_path;
}
