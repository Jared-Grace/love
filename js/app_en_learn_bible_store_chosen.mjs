import { arguments_assert } from "./arguments_assert.mjs";
import { app_en_learn_bible_stores } from "./app_en_learn_bible_stores.mjs";
import { app_shared_bible_language_codes_chosen } from "./app_shared_bible_language_codes_chosen.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export function app_en_learn_bible_store_chosen() {
  "The store of explanations for the language the reader has chosen, read from the address each time it is asked.";
  "Read each time rather than once at the start, because the language is changed in the settings while the app is running, and the reading screen drawn after that has to fetch from the store the reader just picked.";
  "The reader may have chosen several languages, since the chooser is the one every bible app here shares; the first of them this app can explain in wins, in the order the reader put them. Having chosen none it can explain in, the reader gets the first store, which is the language the app opens in.";
  arguments_assert(arguments, 0);
  let stores = app_en_learn_bible_stores();
  let codes = app_shared_bible_language_codes_chosen();
  let property_name = language_code_key();
  function store_for(code) {
    function store_is(store) {
      let language = property_get(store, "language");
      let language_code = property_get(language, property_name);
      let matches = equal(language_code, code);
      return matches;
    }
    let found = list_find_or_null(stores, store_is);
    return found;
  }
  let chosen = list_map_filter_null_not_is(codes, store_for);
  if (list_empty_is(chosen)) {
    let first = list_first(stores);
    return first;
  }
  let r = list_first(chosen);
  return r;
}
