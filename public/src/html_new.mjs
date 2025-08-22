import { html_update } from "./html_update.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { marker } from "./marker.mjs";
export async function html_new(name) {
  marker("3");
  let file_path = html_name_to_path(name);
  await assert_file_exists_not(file_path);
  marker("1");
  await html_update(name);
  marker("2");
}
