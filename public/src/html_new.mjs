import { marker } from "../../../love/public/src/marker.mjs";
import { app_new_html_update } from "../../../love/public/src/app_new_html_update.mjs";
import { html_name_to_path } from "../../../love/public/src/html_name_to_path.mjs";
import { assert_file_exists_not } from "../../../love/public/src/assert_file_exists_not.mjs";
export async function html_new(name) {
  marker("1");
  let file_path = html_name_to_path(name);
  await assert_file_exists_not(file_path);
  await app_new_html_update(name);
}
