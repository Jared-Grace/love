import { ebible_verse_words_is } from "./ebible_verse_words_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_chapter_verse_numbers_with_words(
  bible_folder,
  chapter_code,
) {
  "$plain chapter_code";
  "$plain bible_folder";
  arguments_assert(arguments, 2);
  ("The numbers of the verses in one chapter that have words in them, in the order the chapter reads.");
  ("A page can mark a verse it has nothing to say for. Luke 17 verse 36, Acts 8 verse 37 and a few others are marked in most translations and carry only a footnote explaining that some manuscripts have them, and once the footnotes are cleared away the mark is left standing over nothing. A reader shown a numbered blank would take it for a fault in the app, and any reading that lays a list against those marks is one longer than it should be.");
  let cut = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  let verses = property_get(cut, "verses");
  let filtered = list_filter(verses, ebible_verse_words_is);
  let property_name = "verse_number";
  let numbers = list_map_property(filtered, property_name);
  return numbers;
}
