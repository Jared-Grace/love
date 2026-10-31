import { not } from "./not.mjs";
import { word_root } from "./word_root.mjs";
import { equal } from "./equal.mjs";
export function bible_search_word_key(word) {
  "$plain word";
  "The name one English search word is filed and asked under, so swim, swam and swimming all reach one file.";
  "The forms of to be are the exception: is, was and being stay as they are, because they stand in nearly every verse, and joining them would make a search for was hand back every is in the Bible.";
  "Nothing is ever cut off the front of a word, so atheist never meets theist - the a turns the word into its opposite.";
  "A word holding anything outside a to z is left alone, because the root drops those letters and would turn a name like aeneas spelled with its joined letter into a different word.";
  let plain = /^[a-z]+$/.test(word);
  if (not(plain)) {
    return word;
  }
  let root = word_root(word);
  if (equal(root, "be")) {
    return word;
  }
  return root;
}
