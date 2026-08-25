export function bible_glyph_roots_wording_count(wording) {
  "$plain wording";
  "How many places the interlinear gives one English wording to the word it is a wording of.";
  "It is named at the top rather than written where it is needed because the same number is summed to get a word's whole tally and sorted on to find its commonest wording, and those two are in different files.";
  arguments_assert(arguments, 1);
  let n = wording.count;
  return n;
}
