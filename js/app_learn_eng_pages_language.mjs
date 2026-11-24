import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_eng_stores } from "./app_learn_eng_stores.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_eng_pages_language() {
  "One page of this app for each language it explains English in, each saying in that language what the app is, so a link shared to a reader shows them words they can read.";
  "Read off the stores rather than listed, so a new language is a page the moment it is a store, and no second list exists to forget it.";
  arguments_assert(arguments, 0);
  let stores = app_learn_eng_stores();
  function lambda(store) {
    let name_inner = language_code_key();
    let code = property_path_get_2(store, "language", name_inner);
    let title = property_get(store, "title");
    let description = property_get(store, "description");
    let page = {
      code,
      title,
      description,
    };
    return page;
  }
  let pages = list_map(stores, lambda);
  return pages;
}
