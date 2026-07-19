import { file_open } from "./file_open.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { file_name_html } from "./file_name_html.mjs";
export async function app_shared_html_open(a_name) {
  let file_name = file_name_html(a_name);
  let combined = folder_public_join(file_name);
  await file_open(combined);
}
