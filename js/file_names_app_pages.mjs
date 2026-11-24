import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { apps_pages_language } from "./apps_pages_language.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
export function file_names_app_pages(app_name) {
  "$plain app_name";
  "The file name of every page one app is built into - its own page first, then one per language it has a page for.";
  "Every page carries the clock stamp of the build that wrote it and names the same script, so whatever treats an app's page as decoration rather than code has to treat all of them that way, or a build that changed nothing would still read as changed through the pages it forgot.";
  arguments_assert(arguments, 1);
  let own = file_name_html(app_name);
  let pages = apps_pages_language(app_name);
  function lambda(page) {
    let name = property_get(page, "name");
    let file_name = file_name_html(name);
    return file_name;
  }
  let languages = list_map(pages, lambda);
  let file_names = list_concat([own], languages);
  return file_names;
}
