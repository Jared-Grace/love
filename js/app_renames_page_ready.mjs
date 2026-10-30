import { arguments_assert } from "./arguments_assert.mjs";
import { app_renames_current } from "./app_renames_current.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function app_renames_page_ready(renames, a_name) {
  "$plain a_name";
  arguments_assert(arguments, 2);
  ("Whether the app once called this has its page in the served folder under the name it has today - following every later rename, so a name renamed twice is asked about its newest name.");
  let current = app_renames_current(renames, a_name);
  let to_folder = folder_public_absolute();
  let file_name = file_name_html(current);
  let path = path_join([to_folder, file_name]);
  let r = await file_exists(path);
  return r;
}
