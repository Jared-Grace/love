import { list_empty_is } from "./list_empty_is.mjs";
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
  ("A page where not one verse has words is a different thing from a page carrying a blank verse or two, and the marks it carries are all kept. The clearing above is there to drop the odd mark standing over a footnote; on such a page it drops every mark there is, and the chapter comes back with nothing to lay a reading against - which reads exactly like a chapter the translation has no words for, and is answered for with nothing.");
  ("Bassa is where that showed. Its pages mark all twenty verses of Matthew 28 and give words for none of them, while its reading-aloud edition has all twenty in full - each half holding precisely what the other lacks. Twenty-one chapters of Matthew were shown to nobody over that, and the counts on both sides had matched exactly the whole time.");
  ("Kept whole rather than repaired one mark at a time, because a page with words for some of its verses and not others is a page that has been read and found wanting, while a page with words for none of them was never carrying words at that spot at all. Only the second is safe to read past: the pairing that follows still refuses the chapter unless the two counts agree, so a page that is short rather than empty is caught there as it always was.");
  let cut = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  let verses = property_get(cut, "verses");
  let filtered = list_filter(verses, ebible_verse_words_is);
  let wordless = list_empty_is(filtered);
  let chosen = filtered;
  if (wordless) {
    chosen = verses;
  }
  let property_name = "verse_number";
  let numbers = list_map_property(chosen, property_name);
  return numbers;
}
