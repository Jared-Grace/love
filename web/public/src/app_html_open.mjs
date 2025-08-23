import { file_open } from "./file_open.mjs";
import { folder_public_combine } from "./folder_public_combine.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { marker } from "./marker.mjs";
export async function app_html_open(a_name) {
  let file_name = file_name_html(a_name);
  let combined = folder_public_combine(file_name);
  marker("1");
  await file_open(f_path);
}
