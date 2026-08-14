export function regex_punctuation_dash_kept() {
  "Everything that is not part of a word itself, in any script, except that a plain dash is left standing.";
  "Some languages write a dash inside a word rather than between two of them - Cebuano spells the catch in the throat that way, in maluloy-on and padad-an, and the dash is as much a letter of the word as any other. Cutting there makes two words nobody wrote out of one that was, and both halves are then looked up and neither is found.";
  "This is the reader for a text in such a language, and the one beside it that cuts at every dash is the reader for everywhere else. Neither is right for both, because a dash between two words and a dash inside one look exactly alike.";
  let r = /[^\p{L}\p{M}\p{N}-]/gu;
  return r;
}
