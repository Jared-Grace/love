import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_explains_word_wording(explains, word) {
  "The settled wording written for one word, found whether the word stands capitalised in the text or not, and nothing when none was written for it.";
  "A word that opens a sentence is written with a capital, and the same word in the middle of one is not. They are one word and want one explanation, so a table written in small letters has to answer for both. Asked for the word exactly as it stands first, so a table that ever does write two spellings apart keeps them apart.";
  "Five explanations of ‘Pinaagi’ went on naming an infix the word does not hold, long after the right wording for ‘pinaagi’ had been written and applied to the whole store. Nothing was wrong with the wording and nothing was wrong with the sweep; the word simply opened its sentence, and a lookup that reads the capital as a different word passed over it in silence. The sweep then reported the chapters it had rewritten, which is the shape of a success.";
  let exact = property_get_or_null(explains, word);
  if (null_is(exact)) {
    let lower = text_lower_to(word);
    let folded = property_get_or_null(explains, lower);
    return folded;
  }
  return exact;
}
