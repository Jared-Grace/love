export function bible_glyph_roots_word_row(root_name, word, ranked) {
  "$plain root_name";
  "$plain word";
  "One word of a seed table measured against every English wording the interlinear gives it - what it is seated on, how many places it covers in all, its commonest single word and that word's share, and the whole tally behind the share.";
  "IT HANDS BACK NO VERDICT AND CANNOT. Whether two of those words are one meaning is a question about the language: darkness beside blackness answers one way and of the tribe beside the staff answers the other, and nothing here can tell them apart. So the share is the commonest single word's alone and it is a place in a reading list rather than a mark out of ten, low for a word spread thin over near-synonyms exactly as it is low for a word genuinely holding two meanings, and a person reads the tally to say which.";
  "THE WHOLE TALLY TRAVELS WITH THE ROW rather than the share on its own, because the share is the thing that got somebody to look and the tally is the thing they look at. Handing back the number alone would send every reader back to the interlinear to ask the question this already asked.";
  "A word the interlinear never glosses comes back measured and empty rather than missing, so a seat nobody can measure sits at the top of the reading list instead of quietly falling out of it. That is why an empty tally is put in place of the nothing rather than raised on, and why the share of a word covering no places at all is left at nothing rather than divided by nothing.";
  arguments_assert(arguments, 3);
  let strong = word.strong;
  let glyph = word.glyph;
  let wordings = property_get_or_null(ranked, strong);
  let unglossed = null_is(wordings);
  if (unglossed) {
    wordings = [];
  }
  let total = list_map_sum(wordings, bible_glyph_roots_wording_count);
  let ranked_words = bible_glyph_roots_wordings_ranked(wordings);
  let top = "";
  let top_count = 0;
  let measured = list_empty_not_is(ranked_words);
  if (measured) {
    let commonest = list_first(ranked_words);
    top = commonest.value;
    top_count = commonest.count;
  }
  let share = 0;
  let counted = greater_than(total, 0);
  if (counted) {
    share = divide(top_count, total);
  }
  let row = {
    root: root_name,
    strong,
    glyph,
    total,
    top,
    top_count,
    share,
    words: ranked_words,
  };
  return row;
}
