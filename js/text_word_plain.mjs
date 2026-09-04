import { arguments_assert } from "./arguments_assert.mjs";
import { text_letters_only } from "./text_letters_only.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function text_word_plain(word) {
  "$plain word";
  "One word stripped down to its bare letters in one case, so that two spellings of the same word count as the same word.";
  "★ IT EXISTS SO THAT WRITING AND HEARING CAN BE COMPARED AT ALL. A listener sets down Hallelujah with no mark after it and LORD in ordinary letters; neither is a mishearing, and neither survives being compared letter for letter with what is written. Everything that differs between the two and means nothing is taken off here, once, so that what is left differing is a real disagreement.";
  arguments_assert(arguments, 1);
  let letters = text_letters_only(word);
  let plain = text_lower_to(letters);
  return plain;
}
