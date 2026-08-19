export function html_style_gap_em(component, value_em) {
  "Set how much room stands between the pieces laid out inside one part of the page, measured against the size of its own text.";
  "Measured against the text rather than in fixed dots, the way its neighbours here set padding, so the space between an arrow and the word beside it stays the same gap however large the reader has asked the words to be.";
  html_style_set(component, "gap", text_combine(value_em, "em"));
}
