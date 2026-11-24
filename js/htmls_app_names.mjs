import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
import { apps_page_language_or_null } from "./apps_page_language_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter } from "./list_filter.mjs";
export function htmls_app_names(htmls) {
  "$plain htmls";
  "The app each page is, read off the page file names - leaving out a page that is one of an app's pages per language, since that is part of its app rather than an app of its own and has no script of its own to look for.";
  arguments_assert(arguments, 1);
  let names = list_map(htmls, path_name);
  function lambda(name) {
    let page = apps_page_language_or_null(name);
    let app_is = null_is(page);
    return app_is;
  }
  let app_names = list_filter(names, lambda);
  return app_names;
}
