import { arguments_assert } from "./arguments_assert.mjs";
import { file_names_html_js } from "./file_names_html_js.mjs";
import { file_names_app_pages } from "./file_names_app_pages.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_unique } from "./list_unique.mjs";
export function file_names_app_named(app_name) {
  "$plain app_name";
  "Every file name one app is built into that can be named up front - its page and its script, then a page per language when it has them. The extra scripts a build cuts out are not here, because their names carry a number the build chooses.";
  arguments_assert(arguments, 1);
  let pair = file_names_html_js(app_name);
  let pages = file_names_app_pages(app_name);
  let joined = list_concat(pair, pages);
  let file_names = list_unique(joined);
  return file_names;
}
