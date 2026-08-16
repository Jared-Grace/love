import { arguments_assert } from "./arguments_assert.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { app_shared_bible_verse_texts } from "./app_shared_bible_verse_texts.mjs";
export function app_shared_bible_home_verse_texts(text_languages, top) {
  arguments_assert(arguments, 2);
  let show_language_names = list_multiple_is(text_languages);
  function to_entry(item) {
    let name = "";
    if (show_language_names) {
      let language = property_get(item, "language");
      name = property_get(language, "name");
    }
    let text_l = property_get(item, "text");
    let entry = {
      name,
      text: text_l,
    };
    return entry;
  }
  let entries = list_map(text_languages, to_entry);
  app_shared_bible_verse_texts(top, entries);
}
