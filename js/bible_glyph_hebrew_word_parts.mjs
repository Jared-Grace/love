import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_parsing_parts } from "./bible_interlinear_parsing_parts.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_hebrew_word_parts(word) {
  arguments_assert(arguments, 1);
  ("$plain word");
  ("the word is one Hebrew row of the interlinear - its letters, its parsing and its Strong's number. It is data to read and nothing that runs.");
  ("The parts one written Hebrew word is made of, in the order they are written, each its key and what it is to the word: a joined letter in front, the stem, or a joined letter at the end. Also the parsing of the stem, because what the end letters mean depends on it.");
  ("A HEBREW WORD CAN BE SEVERAL WORDS. And, in, to, from, like and the are letters joined to the front of a word, and his, my, your and their are letters joined to its end; the word carries one Strong's number, the stem's, so those small words are named only in the parsing. Each gets its own key so each can get its own picture, and the key is the parsing code itself - Conj-w, Prep-b, 3ms - because a code can never be mistaken for a Strong's number, so a table seating one cannot collide with a table seating the other.");
  ("THE NUMBER GOES WHERE THE STEM IS WRITTEN. Normally that is the one part the joined letters leave behind. Measured over the Old Testament, 303,990 words leave exactly one; 1,050 leave none, because the stem is itself a preposition the parsing does not spell (from-under is only Prep-m), so the number goes after the front letters and before the end ones; and 454 leave two, a front word parsed as a whole word, so the number goes on the LAST, which is the stem, and the earlier one keeps its own code as a front part.");
  let strong = word.strong;
  let prefix = /^(Conj-w|Art|Prep-[lbmk]|Pr|Pg|Pi|Pd)$/;
  let suffix = /^([123][mfc][sp][0-9]?e?|Pn)$/;
  let parsing_parts = bible_interlinear_parsing_parts(word.parsing);
  let stem_index = -1;
  let index = 0;
  for (let part of parsing_parts) {
    let b = prefix.test(part);
    if (not(b) && not(suffix.test(part))) {
      stem_index = index;
    }
    index = index + 1;
  }
  let stem_parsing = equal(stem_index, -1) ? "" : parsing_parts[stem_index];
  let parts = [];
  let placed = false;
  function stem_place() {
    if (placed) {
      return;
    }
    placed = true;
    let b2 = equal(strong, "");
    if (not(b2)) {
      list_add(parts, {
        key: strong,
        role: "stem",
      });
    }
  }
  index = 0;
  for (let part of parsing_parts) {
    if (equal(index, stem_index)) {
      stem_place();
    } else if (suffix.test(part)) {
      stem_place();
      list_add(parts, {
        key: part,
        role: "suffix",
      });
    } else {
      list_add(parts, {
        key: part,
        role: "prefix",
      });
    }
    index = index + 1;
  }
  stem_place();
  let r = {
    parts,
    stem_parsing,
  };
  return r;
}
