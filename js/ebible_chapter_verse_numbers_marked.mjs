import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function ebible_chapter_verse_numbers_marked(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  arguments_assert(arguments, 2);
  ("Every number one chapter's source page marks, in the order the chapter reads, whether or not the page has words under it.");
  ("The reading beside this one keeps only the marks that have words, because a mark standing over a cleared-away footnote is a mark over nothing and counting it pushes every verse after it along by one. This one keeps all of them, for the case where the words are missing from the page rather than from the translation.");
  ("Galatians 6 in Sabaot is where that showed. Its page marks all eighteen verses and gives words for the first ten, while its reading-aloud edition has all eighteen in full. Ten numbers were laid against eighteen lines, the two counts disagreed, and the chapter was answered for with nothing - so the eight verses this repo already had on disk were shown to nobody.");
  ("Taken from the same cutting of the page as the words-only reading rather than from the page a second time, so the two lists are the same list with one of them filtered, and cannot come to disagree about how many marks there are or what order they come in.");
  let cut = await ebible_chapter_verse_texts(bible_folder, chapter_code);
  let verses = property_get(cut, "verses");
  let property_name = "verse_number";
  let numbers = list_map_property(verses, property_name);
  return numbers;
}
