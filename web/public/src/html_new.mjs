import { html_update } from "./html_update.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
import { html_overwrite } from "./html_overwrite.mjs";
import { assert_file_exists_not } from "./assert_file_exists_not.mjs";
import { marker } from "./marker.mjs";
import { file_write } from "./file_write.mjs";
import { file_open } from "./file_open.mjs";
import { folder_public_combine } from "./folder_public_combine.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { folder_public } from "./folder_public.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function html_new(name) {
  let file_path = html_name_to_path(name);
  await assert_file_exists_not(file_path);
  marker("1");
  await html_update(name);
  marker("2");
}
