import { arguments_assert } from "./arguments_assert.mjs";
import { file_names_app_pages } from "./file_names_app_pages.mjs";
import { list_includes } from "./list_includes.mjs";
export function file_name_app_page_is(file_name, app_name) {
  "$plain file_name";
  "$plain app_name";
  "True when this file is one of an app's pages - its own, or one of its pages per language - rather than one of its scripts.";
  arguments_assert(arguments, 2);
  let page_names = file_names_app_pages(app_name);
  let page_is = list_includes(page_names, file_name);
  return page_is;
}
