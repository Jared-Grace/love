import { property_get } from "./property_get.mjs";
import { wolff_word_line_words } from "./wolff_word_line_words.mjs";
export function wolff_entry_headwords(entry) {
  "Every spelling one dictionary entry is the entry for, which is usually one and is sometimes several.";
  "The book heads an entry with more than one spelling wherever a word is written more than one way, and prints them together separated by commas. Read as a single spelling the line matches nothing a text writes, so the entry answers to nobody - which is not an error anywhere, only an entry that is never found.";
  let headword = property_get(entry, "headword");
  let r = wolff_word_line_words(headword);
  return r;
}
