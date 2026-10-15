import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_names_hebrew } from "./bible_glyph_names_hebrew.mjs";
import { ebible_testament_new_name } from "./ebible_testament_new_name.mjs";
import { bible_glyph_names_greek } from "./bible_glyph_names_greek.mjs";
export function bible_glyph_testament_names(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own name. It names which table to read and nothing that runs.");
  ("Every name one testament explains, keyed by the Strong's number of the word that is the name.");
  ("A NAME IS FOUND BY THE WORD'S OWN NUMBER, NEVER BY ITS PICTURES. A picture may be shared: Ephraim is drawn as the fruit his name means, the Hebrew and the Aramaic spellings of Judah share one picture, and the Lord and the Lord GOD are both I AM. Keyed by picture, whichever word was filed last answered for all of them, so every plain fruit was labelled Ephraim and Judah lost its name to a spelling with none.");
  ("THE TWO TESTAMENTS NUMBER THEIR WORDS APART, so the same number is a different word in each, so each testament reads its own table: Hebrew numbers for the Old, Greek numbers for the New.");
  let names = {};
  let right = ebible_testament_old_name();
  if (equal(testament_name, right)) {
    names = bible_glyph_names_hebrew();
  }
  let right_new = ebible_testament_new_name();
  if (equal(testament_name, right_new)) {
    names = bible_glyph_names_greek();
  }
  return names;
}
