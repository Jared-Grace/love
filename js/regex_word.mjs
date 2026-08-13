export function regex_word() {
  "A run of letters with no punctuation in it - one word, in whatever script it is written in.";
  "The exact other side of the punctuation reader beside it, so cutting a line at one and finding the words with the other agree on where every word starts and ends. Accents and vowel points ride with their letters rather than ending a word, and digits count as part of one, since a verse number written into a line is not two words.";
  let r = /[\p{L}\p{M}\p{N}]+/gu;
  return r;
}
