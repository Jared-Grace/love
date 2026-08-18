export function bible_glyph_survey_settled(unmapped, occurrences_total) {
  "The undrawn words split into the two piles that mean opposite things: the ones nobody has chosen a picture for yet, and the ones a picture was refused on purpose.";
  "$plain unmapped";
  "$plain occurrences_total";
  "A survey that reports one undrawn figure is reporting two different facts added together. Work outstanding and a decision already taken look the same from the outside, and the sum of the two is the number people quote.";
  "SETTLED IS THE HONEST PROGRESS FIGURE, and drawn is the honest coverage figure. Drawn says how much of the page carries a picture; settled says how much of the page nobody has to think about again. The gap between them is exactly the deliberately blank words, and reporting both is what stops either being mistaken for the other.";
  "The refused words are returned in full rather than counted, because the list is short by construction and a reader who disagrees with a refusal can only argue with it if they can see which words it names.";
  let refused = bible_glyph_undrawn_deliberate();
  let refused_strongs = {};
  for (let word of refused) {
    property_set(refused_strongs, word.strong, true);
  }
  let outstanding = [];
  let occurrences_refused = 0;
  for (let word of unmapped) {
    let settled = property_exists(refused_strongs, word.strong);
    if (settled) {
      occurrences_refused = add(occurrences_refused, word.occurrences);
      continue;
    }
    list_add(outstanding, word);
  }
  let tenths = multiply_divide_round(occurrences_refused, 1000, occurrences_total);
  let percent_refused = divide(tenths, 10);
  let r = {
    outstanding,
    refused,
    occurrences_refused,
    percent_refused,
  };
  return r;
}
