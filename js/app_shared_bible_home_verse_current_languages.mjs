import { arguments_assert } from "./arguments_assert.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_home_languages } from "./app_shared_bible_home_languages.mjs";
export async function app_shared_bible_home_verse_current_languages(
  verses,
  verse_number_hash,
  chapter_code,
  books,
) {
  arguments_assert(arguments, 4);
  let property_name = verse_number_key();
  let verse_current = list_find_property(
    verses,
    property_name,
    verse_number_hash,
  );
  let property_name2 = verse_number_key();
  let verse_number = property_get(verse_current, property_name2);
  let text = property_get(verse_current, "text");
  let r2 = await app_shared_bible_home_languages(
    chapter_code,
    verse_number_hash,
    verses,
    books,
    text,
  );
  let text_languages = property_get(r2, "text_languages");
  let languages_available = property_get(r2, "languages_available");
  let r = {
    verse_current,
    verse_number,
    text_languages,
    languages_available,
  };
  return r;
}
