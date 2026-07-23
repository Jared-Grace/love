import { html_name_to_path } from "./html_name_to_path.mjs";
import { file_open } from "./file_open.mjs";
export async function app_shared_html_open(a_name) {
  let combined = html_name_to_path(a_name);
  await file_open(combined);
}
