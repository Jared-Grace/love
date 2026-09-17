import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join } from "./list_join.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_keys_spelled(keys, letters, drawn) {
  arguments_assert(arguments, 3);
  ("$plain keys");
  ("the keys name the parts of one word, in the order they are to be drawn. They are data and nothing that runs.");
  ("$plain letters");
  ("the letters are the word written out, in the original or in English. They are text to show and nothing that runs.");
  ("$plain drawn");
  ("the table maps a key to the name of its picture. It is data to read and nothing that runs.");
  ("One word written in the picture shorthand: each part with a picture as that picture, the pictures touching, and the letters of the word where the first part with no picture stands.");
  ("A PART WITH NO PICTURE SHOWS THE LETTERS OF ITS WORD, once. Nothing a word says is dropped in silence that way - the letters hold every part, drawn or not - and a word whose parts are all drawn shows no letters at all. The letters are the placeholder.");
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
  for (let key of keys) {
    let glyph = property_get_or_null(drawn, key);
    let undrawn = null_is(glyph) || equal(glyph, "");
    if (not(undrawn)) {
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
  if (list_empty_is(keys)) {
    spelled = letters;
  }
  return spelled;
}
