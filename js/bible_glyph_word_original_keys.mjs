import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_word_crasis_parts } from "./bible_glyph_word_crasis_parts.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { bible_glyph_hebrew_word_parts } from "./bible_glyph_hebrew_word_parts.mjs";
export function bible_glyph_word_original_keys(word, testament_name) {
  arguments_assert(arguments, 2);
  ("$plain word");
  ("the word is one row of the interlinear - its letters, its parsing, its English and its Strong's number. It is data to read and nothing that runs.");
  ("$plain testament_name");
  ("the name is a testament's own name. It is data to read and it does not run.");
  ("The keys one written original word is drawn by, in the order its parts are WRITTEN: a Strong's number for the word itself, and the interlinear's own parsing code for each joined letter that has no number of its own.");
  ("A Hebrew word's parts, and why a joined letter is keyed by its parsing code, are answered by ",
    fn_name("bible_glyph_hebrew_word_parts"),
    "; this keeps them in the order they come.");
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
  let hebrew = bible_glyph_hebrew_word_parts(word);
  for (let part of hebrew.parts) {
    list_add(keys, part.key);
  }
  return keys;
}
