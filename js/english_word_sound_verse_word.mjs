import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { english_word_sound_verses } from "./english_word_sound_verses.mjs";
import { text_combine } from "./text_combine.mjs";
import { properties_get } from "./properties_get.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
export function english_word_sound_verse_word(
  chapter_code,
  verse_numbers,
  word,
) {
  "$plain chapter_code";
  "$plain word";
  "The name to ask for when one English word is tapped in these verses: the word itself, or the name of its other saying - lives-2 - when the reader says it that other way here.";
  ("★ ONLY THE RECORDING'S NAME CHANGES, NEVER WHAT IS SHOWN. A button still reads lives; it just plays lyvz in a verse about a person's life, as chosen per verse by ",
    fn_name("bible_gloss_heteronyms_verses_write"),
    ".");
  ("A word in none of the listed verses, or a page that knows no chapter, gets the word back unchanged, which is the button's usual saying.");
  arguments_assert(arguments, 3);
  let lower = text_lower_to(word);
  let table = english_word_sound_verses();
  let prefix = text_combine(lower, "-");
  for (let key of properties_get(table)) {
    let named = text_starts_with(key, prefix);
    if (not(named)) {
      continue;
    }
    let places = property_get(table, key);
    for (let verse_number of verse_numbers) {
      let place = text_combine_multiple([chapter_code, ":", verse_number]);
      let here = list_includes(places, place);
      if (here) {
        return key;
      }
    }
  }
  return word;
}
