import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_keys_spelled } from "./bible_glyph_keys_spelled.mjs";
import { list_add } from "./list_add.mjs";
import { bible_glyph_word_parse } from "./bible_glyph_word_parse.mjs";
export function bible_glyph_verse_original_parsed(original_words, drawn) {
  arguments_assert(arguments, 2);
  ("$plain original_words");
  ("the words are one kept verse in the order it was written, each its letters followed by the keys of its parts. They are data to draw and nothing that runs.");
  ("$plain drawn");
  ("the table maps a key to the name of its picture. It is data to read and nothing that runs.");
  ("One verse in the order it was written, turned into the words a page draws: each written word is one drawn word, its parts touching.");
  ("What a part with no picture shows is answered by ",
    fn_name("bible_glyph_keys_spelled"),
    ", the same as on the English line.");
  let words = [];
  for (let original_word of original_words) {
    let letters = original_word[0];
    let keys = original_word.slice(1);
    let spelled = bible_glyph_keys_spelled(keys, letters, drawn);
    let item = bible_glyph_word_parse(spelled);
    list_add(words, item);
  }
  return words;
}
