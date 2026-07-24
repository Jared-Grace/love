import { ebible_language_english } from "./ebible_language_english.mjs";
import { list_add } from "./list_add.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function app_shared_bible_offline_languages(languages) {
  "english is always on offer: the reader leans on it for the book names and for the verse set beside your own language";
  let en = ebible_language_english();
  let code = property_get(en, "language_code");
  let found = list_find_property_or_null(languages, "language_code", code);
  let listed = list_copy(languages);
  if (null_is(found)) {
    list_add(listed, en);
  }
  return listed;
}
