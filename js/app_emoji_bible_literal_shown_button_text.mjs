export function app_emoji_bible_literal_shown_button_text(shown) {
  "The button that switches between the chapter drawn in English order and the chapter drawn word for word from the original, naming the one it switches to.";
  if (shown) {
    let r = "English order";
    return r;
  }
  let r2 = "Word for word";
  return r2;
}
