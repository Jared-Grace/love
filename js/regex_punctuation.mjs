export function regex_punctuation() {
  "Everything that is not part of a word itself: the marks around and between words, in any script.";
  "Letters, the accents and vowel points that ride on a letter, and digits are all kept, and everything else goes. The repo already had a letters-only reader, but it asks for the twenty-six English letters and so empties a Greek or Hebrew word entirely, which is the opposite of leaving the word alone.";
  let r = /[^\p{L}\p{M}\p{N}]/gu;
  return r;
}
