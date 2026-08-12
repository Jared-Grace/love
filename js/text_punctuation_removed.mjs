import { regex_punctuation } from "./regex_punctuation.mjs";
export function text_punctuation_removed(t) {
  "One piece of text with its punctuation taken out, in whatever script it is written in.";
  "Two spellings of the same word are compared by this when one of them carries the comma or full stop it happened to sit in front of. Keeping the accents and vowel points is the whole point of not reaching for the letters-only reader beside it, which knows only the English alphabet.";
  let r = regex_punctuation();
  let bare = t.replace(r, "");
  return bare;
}
