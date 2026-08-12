import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { property_get } from "./property_get.mjs";
import { text_replace } from "./text_replace.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_chapter_verse_numbers_with_words(
  bible_folder,
  chapter_code,
) {
  arguments_assert(arguments, 2);
  ("The numbers of the verses in one chapter that have words in them, in the order the chapter reads.");
  ("A page can mark a verse it has nothing to say for. Luke 17 verse 36, Acts 8 verse 37 and a few others are marked in most translations and carry only a footnote explaining that some manuscripts have them, and once the footnotes are cleared away the mark is left standing over nothing. A reader shown a numbered blank would take it for a fault in the app, and any reading that lays a list against those marks is one longer than it should be.");
  let verses = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  function lambda(item) {
    let text = property_get(item, "text");
    let normalized = whitespace_normalize(text);
    let replaced = text_replace(normalized, "[]", "");
    let trimmed = whitespace_normalize(replaced);
    let n = text_empty_not_is(trimmed);
    return n;
  }
  let filtered = list_filter(verses, lambda);
  let property_name = "verse_number";
  let numbers = list_map_property(filtered, property_name);
  return numbers;
}
