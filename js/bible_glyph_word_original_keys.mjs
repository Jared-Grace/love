import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_word_crasis_parts } from "./bible_glyph_word_crasis_parts.mjs";
import { list_add } from "./list_add.mjs";
import { bible_interlinear_parsing_parts } from "./bible_interlinear_parsing_parts.mjs";
export function bible_glyph_word_original_keys(word, testament_name) {
  arguments_assert(arguments, 2);
  ("$plain word");
  ("the word is one row of the interlinear - its letters, its parsing, its English and its Strong's number. It is data to read and nothing that runs.");
  ("$plain testament_name");
  ("the name is a testament's own name. It is data to read and it does not run.");
  ("The keys one written original word is drawn by, in the order its parts are WRITTEN: a Strong's number for the word itself, and the interlinear's own parsing code for each joined letter that has no number of its own.");
  ("A HEBREW WORD CAN BE SEVERAL WORDS. And, in, to, from, like and the are letters joined to the front of a word, and his, my, your and their are letters joined to its end; the word carries one Strong's number, the stem's, so those small words are named only in the parsing. Each gets its own key here so each can get its own picture, and the key is the parsing code itself - Conj-w, Prep-b, 3ms - because a code can never be mistaken for a Strong's number, so a table seating one cannot collide with a table seating the other.");
  ("THE NUMBER GOES WHERE THE STEM IS WRITTEN. Normally that is the one part the joined letters leave behind. Measured over the Old Testament, 303,990 words leave exactly one; 1,050 leave none, because the stem is itself a preposition the parsing does not spell (from-under is only Prep-m), so the number goes after the front letters and before the end ones; and 454 leave two, a front word parsed as a whole word, so the number goes on the LAST, which is the stem, and the earlier one keeps its own code.");
  ("A GREEK WORD IS ONE WORD except for crasis, where and is fused onto the front of the next word. Its parts come from the same split the English line uses, but here and always goes first, because that is where it is written, whatever order the English says it in.");
  let strong = word.strong;
  let keys = [];
  let new_name = ebible_testament_new_name();
  if (equal(testament_name, new_name)) {
    let parts = bible_glyph_word_crasis_parts(
      strong,
      word.gloss,
      testament_name,
    );
    for (let part of parts) {
      if (equal(part.strong, "2532")) {
        list_add(keys, part.strong);
      }
    }
    for (let part of parts) {
      let b = equal(part.strong, "2532");
      if (not(b)) {
        list_add(keys, part.strong);
      }
    }
    return keys;
  }
  let prefix = /^(Conj-w|Art|Prep-[lbmk]|Pr|Pg|Pi|Pd)$/;
  let suffix = /^([123][mfc][sp][0-9]?e?|Pn)$/;
  let parts = bible_interlinear_parsing_parts(word.parsing);
  let stem_index = -1;
  let index = 0;
  for (let part of parts) {
    let b2 = prefix.test(part);
    if (not(b2) && not(suffix.test(part))) {
      stem_index = index;
    }
    index = index + 1;
  }
  let placed = false;
  function strong_place() {
    if (placed) {
      return;
    }
    placed = true;
    let b3 = equal(strong, "");
    if (not(b3)) {
      list_add(keys, strong);
    }
  }
  index = 0;
  for (let part of parts) {
    if (equal(index, stem_index)) {
      strong_place();
    } else if (suffix.test(part)) {
      strong_place();
      list_add(keys, part);
    } else {
      list_add(keys, part);
    }
    index = index + 1;
  }
  strong_place();
  return keys;
}
