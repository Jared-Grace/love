import { gloss_entries_values_standing_is_generic } from "./gloss_entries_values_standing_is_generic.mjs";
import { gloss_entry_explain_key } from "./gloss_entry_explain_key.mjs";
export function gloss_entries_explains_standing_is(entries, explains) {
  "Whether a passage already says, word for word and in the same standings, everything a piece of waiting wording would write into it - so that writing it again would change nothing at all.";
  "It is the twin of the reading over the short English, asked of the other half of a word's row, and all it does is name which half; the reading itself is written once and does not have to know there are two.";
  let key = gloss_entry_explain_key();
  let r = gloss_entries_values_standing_is_generic(entries, explains, key);
  return r;
}
