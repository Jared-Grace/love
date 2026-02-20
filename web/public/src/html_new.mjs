import { app_new_html_update } from "../../../love/public/src/app_new_html_update.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
import { file_exists_not_assert } from "../../../love/public/src/file_exists_not_assert.mjs";
export async function html_new(name) {
  let file_path = html_name_to_path(name);
  await file_exists_not_assert(file_path);
  await app_new_html_update(name);
}
