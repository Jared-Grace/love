import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { bible_glyph_names_hebrew } from "./bible_glyph_names_hebrew.mjs";
export function bible_glyph_testament_names(testament_name) {
  arguments_assert(arguments, 1);
  ("$plain testament_name");
  ("the name is a testament's own name. It names which table to read and nothing that runs.");
  ("Every name one testament explains, keyed by the Strong's number of the word that is the name.");
  ("A NAME IS FOUND BY THE WORD'S OWN NUMBER, NEVER BY ITS PICTURES. A picture may be shared: Ephraim is drawn as the fruit his name means, the Hebrew and the Aramaic spellings of Judah share one picture, and the Lord and the Lord GOD are both I AM. Keyed by picture, whichever word was filed last answered for all of them, so every plain fruit was labelled Ephraim and Judah lost its name to a spelling with none.");
  ("THE TWO TESTAMENTS NUMBER THEIR WORDS APART, so the same number is a different word in each, and only the Old Testament has a table of names yet; the New Testament answers with none.");
  let names = {};
  let right = ebible_testament_old_name();
  if (equal(testament_name, right)) {
    names = bible_glyph_names_hebrew();
  }
  return names;
}
