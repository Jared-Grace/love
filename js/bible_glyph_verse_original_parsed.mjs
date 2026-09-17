import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join } from "./list_join.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
export function bible_glyph_verse_original_parsed(original_words, drawn) {
  arguments_assert(arguments, 2);
  ("$plain original_words");
  ("the words are one kept verse in the order it was written, each its letters followed by the keys of its parts. They are data to draw and nothing that runs.");
  ("$plain drawn");
  ("the table maps a key to the name of its picture. It is data to read and nothing that runs.");
  ("One verse in the order it was written, turned into the words a page draws: each written word is one drawn word, its parts touching.");
  ("A PART WITH NO PICTURE SHOWS THE LETTERS OF ITS WORD, once, where that part stands. Nothing a word says is dropped in silence that way - the letters hold every part, drawn or not - and a word whose parts are all drawn shows no letters at all. The letters are the placeholder, the way English is on the English line.");
  let words = [];
  for (let original_word of original_words) {
    let letters = original_word[0];
    let spelled = "";
    let run = [];
    let letters_shown = false;
    function run_flush() {
      if (list_empty_is(run)) {
        return;
      }
      spelled = spelled + "$" + list_join(run, "+") + "$";
      run = [];
    }
    for (let key of original_word.slice(1)) {
      let glyph = property_get_or_null(drawn, key);
      let undrawn = null_is(glyph) || equal(glyph, "");
      if (!undrawn) {
        list_add(run, glyph);
        continue;
      }
      if (letters_shown) {
        continue;
      }
      run_flush();
      spelled = spelled + letters;
      letters_shown = true;
    }
    run_flush();
    if (equal(spelled, "")) {
      spelled = letters;
    }
    list_add(words, bible_glyph_word_parse(spelled));
  }
  return words;
}
