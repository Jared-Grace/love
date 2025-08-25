import { html_update_dev } from "./html_update_dev.mjs";
import { html_update } from "./html_update.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
export async function html_new(name) {
  let file_path = html_name_to_path(name);
  await assert_file_exists_not(file_path);
  await html_update(name);
  await html_update_dev(name);
}
