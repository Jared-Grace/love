import { arguments_assert } from "./arguments_assert.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { apps_pages_language } from "./apps_pages_language.mjs";
import { property_get } from "./property_get.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { path_join } from "./path_join.mjs";
import { html_code_page_of_language } from "./html_code_page_of_language.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function html_pages_language_overwrite(a_name, file_path, body) {
  "$plain a_name";
  "$plain file_path";
  "$plain body";
  "Writes an app's pages per language beside its own page, each with its own language's title and description and the very body the app's own page was just given.";
  "The same body rather than one built again, so every page names the same script under the same stamp - which is what lets a build that changed nothing keep all of them, and what makes them one app's pages rather than apps of their own.";
  "An app with no pages per language writes nothing.";
  arguments_assert(arguments, 3);
  let folder = await path_dirname(file_path);
  let pages = apps_pages_language(a_name);
  for (let page of pages) {
    let name = property_get(page, "name");
    let page_file_name = file_name_html(name);
    let page_path = path_join([folder, page_file_name]);
    let contents = html_code_page_of_language(page, body);
    await file_overwrite(page_path, contents);
  }
}
