import { arguments_assert } from "./arguments_assert.mjs";
import { text_from_code_number } from "./text_from_code_number.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_word_parse_parts_word } from "./bible_glyph_word_parse_parts_word.mjs";
export function bible_glyph_words_joined(words) {
  arguments_assert(arguments, 1);
  ("$plain words");
  ("the words are the pieces of one original word, each already parsed, in the order they are drawn. They are data and nothing that runs.");
  ("One word made of the pieces of one original word, each piece kept as its own picture and a small gap between them, so the reader sees both where each piece ends and where the whole word ends.");
  ("THE GAP IS A NO-BREAK SPACE, narrower than the em space that stands between two picture words, so a word's pieces sit closer to each other than to the next word, and a line never breaks inside one word. The rejected readings: the pieces welded into one group, which hides where one piece ends and the next begins; each piece its own word, which hides where the original word ends.");
  let gap = text_from_code_number(160);
  let parts = [];
  let first = true;
  for (let word of words) {
    if (not(first)) {
      list_add(parts, gap);
    }
    first = false;
    let plain = equal(typeof word, "string");
    if (plain) {
      list_add(parts, word);
      continue;
    }
    for (let part of word) {
      list_add(parts, part);
    }
  }
  let joined = bible_glyph_word_parse_parts_word(parts);
  return joined;
}
