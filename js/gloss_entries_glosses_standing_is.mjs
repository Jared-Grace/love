import { gloss_entries_values_standing_is_generic } from "./gloss_entries_values_standing_is_generic.mjs";
import { gloss_entry_gloss_key } from "./gloss_entry_gloss_key.mjs";
export function gloss_entries_glosses_standing_is(entries, glosses) {
  "Whether a passage's words already carry, word for word and in the same standings, all the short English a piece of waiting text would write under them - so that writing it again would change nothing at all.";
  "It is the twin of the reading over the prose, asked of the other half of a word's row, and all it does is name which half; the reading itself is written once and does not have to know there are two.";
  let key = gloss_entry_gloss_key();
  let r = gloss_entries_values_standing_is_generic(entries, glosses, key);
  return r;
}
