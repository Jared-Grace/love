import { app_new_html_update } from "./app_new_html_update.mjs";
import { html_name_to_path } from "./html_name_to_path.mjs";
import { file_exists_not_assert_json } from "./file_exists_not_assert_json.mjs";
export async function html_new(name) {
  let file_path = html_name_to_path(name);
  await file_exists_not_assert_json(file_path, {
    hint: "an html file with this name already exists — pick a new name?",
    name,
  });
  await app_new_html_update(name);
}
