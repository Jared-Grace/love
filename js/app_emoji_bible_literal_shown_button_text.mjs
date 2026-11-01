export function app_emoji_bible_literal_shown_button_text(shown) {
  "The button that switches between the chapter drawn in English order and the chapter drawn word for word from the original, naming the one it switches to.";
  "The two names are a pair, English order and original order, because the one thing the two drawings differ in is the order the pictures come in. Rejected: word for word, which says how closely the pictures follow the words rather than whose order they follow, and so did not tell a reader what pressing it changes.";
  if (shown) {
    let r = "English order";
    return r;
  }
  let r2 = "Original order";
  return r2;
}
