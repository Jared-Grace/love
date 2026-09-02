import { urdu_glued_words_split_recorded } from "./urdu_glued_words_split_recorded.mjs";
import { property_get } from "./property_get.mjs";
export function urdu_glued_words_split(text) {
  "One piece of writing with the missing spaces put back into it: every word that was ruled to be two words run together is spelled with its space, and everything else is handed back untouched.";
  "The reading itself is the twin's, and every promise about it is made there: whole words and only whole words, so a decided word sitting inside a longer word is left alone; nothing but the letters looked at, so whatever stood between them comes back exactly as it was; and the ruling table asked only for the names somebody wrote in it, which is what makes it safe to run over writing in any language.";
  "This one exists because almost nobody wants the record. A caller putting a chapter in front of a reader wants the text and nothing else, and having to unwrap a record to get it would put the same two lines at every one of those call sites. The record is for the few places that need to say what changed.";
  "Both were one function until the record was wanted, and joining them back is what stops them coming to disagree. Two walks over the same ruling table is the shape where one gets a fix and the other quietly does not, and the two would then hand back different scripture depending on which door a reader came through.";
  let recorded = urdu_glued_words_split_recorded(text);
  let repaired = property_get(recorded, "repaired");
  return repaired;
}
