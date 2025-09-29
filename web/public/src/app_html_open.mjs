import { file_open } from "../../../love/public/src/file_open.mjs";
import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_html_open(a_name) {
  let file_name = file_name_html(a_name);
  let combined = folder_public_combine(file_name);
  marker("1");
  await file_open(combined);
}
