import { arguments_assert } from "./arguments_assert.mjs";
export function regex_word_or_punctuation() {
  "One word of any script, or one mark of punctuation standing on its own.";
  "THE SPLITTERS BESIDE THIS ONE THROW THE PUNCTUATION AWAY, and a reading that needs to know something stood between two words cannot get it back afterwards. The whole verse. Two doing words reads as the whole verse two doing words once the full stop is gone, and a reading looking for a verse number after the word verse then finds one that nobody wrote.";
  "A mark comes back as a word of its own rather than stuck to the word before it, so whoever is reading can test it the way they test any other token and does not have to take a word apart to find out how it ended.";
  "A dash stays inside a word, for the same reason it does in the reader beside this one: some languages write a dash inside a word rather than between two, and English writes twenty-one that way.";
  "Spaces come back as nothing at all. They are the one mark that never carries meaning of its own, and letting them through would put a token between every pair of words.";
  arguments_assert(arguments, 0);
  let r = /[\p{L}\p{M}\p{N}-]+|[^\s\p{L}\p{M}\p{N}-]/gu;
  return r;
}
