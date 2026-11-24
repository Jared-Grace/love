import { arguments_assert } from "./arguments_assert.mjs";
import { location_pathname } from "./location_pathname.mjs";
import { path_name } from "./path_name.mjs";
import { apps_page_language_or_null } from "./apps_page_language_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_learn_eng_language_code_page_or_null() {
  "The language the page's own address names, when it was opened at one of this app's pages per language - or null when it was opened at the app's own address, which names none.";
  "A link to a language's page was sent to somebody who reads that language, so opening it in that language is what the sender meant - the same as a link whose address carries the language after the hash.";
  arguments_assert(arguments, 0);
  let pathname = location_pathname();
  let page_name = path_name(pathname);
  let page = apps_page_language_or_null(page_name);
  if (null_is(page)) {
    return null;
  }
  let code = property_get(page, "code");
  return code;
}
