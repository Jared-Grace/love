import { binisaya_words_known_get } from "./binisaya_words_known_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function binisaya_word_root_key(known, word) {
  "The one key every Cebuano word built from the same root answers to, so a verb and the noun made from it can be recognised as the same thing.";
  "Cebuano builds a great deal on affixes, and two spellings that share nothing on the surface can be the same word underneath. Laying spellings side by side would call 'mokaon' and 'pagkaon' two different words when the whole point of naming them together is that they are not.";
  "A word the dictionary has never been asked about answers with its own spelling in small letters, and so does a word held with no root. That is the honest fallback: it matches only itself, which is exactly as much as is actually known about it, and it never quietly makes two unrelated words agree.";
  let lower = text_lower_to(word);
  let entry = binisaya_words_known_get(known, word);
  if (null_is(entry)) {
    return lower;
  }
  let root = property_get_or_null(entry, "root");
  if (null_is(root)) {
    return lower;
  }
  let empty = text_empty_is(root);
  if (empty) {
    return lower;
  }
  let key = text_lower_to(root);
  return key;
}
