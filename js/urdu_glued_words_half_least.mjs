export function urdu_glued_words_half_least() {
  "How often each half of a word has to stand on its own elsewhere in the Urdu bible before that word is worth offering as two words run together.";
  "The number is here rather than typed at each caller because the gate and the ruling have to mean the same number. The ruling is a list of words somebody sat down and judged; the gate asks the detector for its words and fails on any the ruling does not carry. Ask the detector for a wider set than the one that was judged and every extra word is a failure nobody introduced.";
  "A hundred is where the evidence stops being evidence. Below it the halves are rare enough that two of them meeting inside one longer word says very little, and what comes back is mostly ordinary words that happen to divide. Lower it and the judging is real work again, so lowering it is a decision to do that work, not a knob to turn.";
  let least = 100;
  return least;
}
