export function text_gap_mark() {
  "The character written in where a mark has been taken out of a passage, so that the hole the mark left can still be told apart from a space somebody typed.";
  "Everything hard about tidying up a passage that was assembled out of pieces comes from not knowing which spaces are the assembler's own. A space in front of a comma has to go if the marking put it there, and has to stay if the translator wrote it, and by the time the passage is one flat string the two look identical. Leaving something behind at the moment of removal is what keeps them apart, and it costs one character.";
  "It is the null character, chosen because no published text contains one. A space would be indistinguishable from the very thing it has to be distinguished from, and any visible character - a bullet, a pipe - is one some translation could legitimately print.";
  "It is asked for rather than spelled, and spelled here by its number rather than as itself, so that no file has to carry an invisible byte that a search would step over without saying so.";
  let mark = String.fromCharCode(0);
  return mark;
}
