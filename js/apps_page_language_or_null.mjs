import { property_equals } from "./property_equals.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { apps_pages_language_table } from "./apps_pages_language_table.mjs";
import { properties_get } from "./properties_get.mjs";
import { apps_pages_language } from "./apps_pages_language.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function apps_page_language_or_null(page_name) {
  "$plain page_name";
  "The language page a page name is - which app it belongs to, its language, its title and description - or null when the name is not a language page of any app.";
  "This is the question asked from the page's side, by whatever finds a page and wants to know whose it is: the list of what is served, and the rewriting of a page already on disk.";
  arguments_assert(arguments, 1);
  let table = apps_pages_language_table();
  let a_names = properties_get(table);
  for (let a_name of a_names) {
    let pages = apps_pages_language(a_name);
    function lambda(page) {
      let same = property_equals(page, "name", page_name);
      return same;
    }
    let found = list_find_or_null(pages, lambda);
    if (null_not_is(found)) {
      return found;
    }
  }
  return null;
}
