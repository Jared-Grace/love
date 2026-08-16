import { verse_number_key } from "./verse_number_key.mjs";
import { each } from "./each.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
export function bible_interlinear_verses_words(
  verses_interlinear,
  verse_numbers,
) {
  "The interlinear's own words for a run of verse numbers out of one chapter, gathered into a single list in the order the numbers are given.";
  "A passage is one verse or several, and a reader setting explanations against words wants the words of the whole passage laid end to end, the way the page paints them. Where a verse number names nothing in the chapter it adds nothing, so a passage reaching past the chapter comes back short rather than throwing.";
  let words_all = [];
  function verse_read(verse_number) {
    let property_name = verse_number_key();
    let words = list_find_property_get(
      verses_interlinear,
      property_name,
      verse_number,
      "words",
    );
    list_add_multiple(words_all, words);
  }
  each(verse_numbers, verse_read);
  return words_all;
}
