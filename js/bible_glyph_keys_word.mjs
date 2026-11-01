import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { bible_glyph_keys_spelled } from "./bible_glyph_keys_spelled.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_words_joined } from "./bible_glyph_words_joined.mjs";
export function bible_glyph_keys_word(keys, letters, drawn) {
  arguments_assert(arguments, 3);
  ("$plain keys");
  ("the keys name the parts of one word, in the order they are to be drawn. They are data and nothing that runs.");
  ("$plain letters");
  ("the letters are the word written out. They are text to show and nothing that runs.");
  ("$plain drawn");
  ("the table maps a key to the name of its picture. It is data to read and nothing that runs.");
  ("One word drawn from its keys, each key its own picture with a small gap between them, or an empty text when every key is silent.");
  ("EACH KEY IS SPELLED BY THE SAME CALL THAT SPELLS A WHOLE WORD, handed one key at a time, so what a silent key or a key with no picture does stays decided in one place. The letters still show only once, however many keys have no picture.");
  if (list_empty_is(keys)) {
    return letters;
  }
  let words = [];
  let letters_shown = false;
  for (let key of keys) {
    let spelled = bible_glyph_keys_spelled([key], letters, drawn);
    if (equal(spelled, "")) {
      continue;
    }
    let shows_letters = equal(spelled, letters);
    if (shows_letters) {
      if (letters_shown) {
        continue;
      }
      letters_shown = true;
    }
    let word = bible_glyph_word_parse(spelled);
    list_add(words, word);
  }
  if (list_empty_is(words)) {
    let none = "";
    return none;
  }
  let joined = bible_glyph_words_joined(words);
  return joined;
}
