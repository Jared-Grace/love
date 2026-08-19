export function regex_usfm_word_attributes() {
  ("What usfm hangs on a single word to say more about it - a bar, and everything after the bar up to the mark that closes the word.");
  ("A word carrying its dictionary number is written as the word, a bar, and the number. The word is scripture and the number is not, so the bar and what follows it come away and the word stays.");
  ("The run stops at the next backslash rather than at the end of the line, because the mark closing the word comes straight after the number and everything past that mark is scripture again.");
  let r = /\|[^\\]*/g;
  return r;
}
