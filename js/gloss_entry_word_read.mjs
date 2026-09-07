import { property_get } from "./property_get.mjs";
export function gloss_entry_word_read(entry) {
  "The English word one explanation is about.";
  "It is named here rather than reached for by its property name at each place that wants it, because a list of explanations is turned into a list of words in several sweeps and each of those had spelled the property out for itself.";
  let word = property_get(entry, "word");
  return word;
}
