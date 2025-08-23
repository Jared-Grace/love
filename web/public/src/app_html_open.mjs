import { folder_public_combine } from "./folder_public_combine.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { marker } from "./marker.mjs";
export function app_html_open(a_name) {
  let file_name = file_name_html(a_name);
  marker("1");
  let combined = folder_public_combine(file_name);
}
