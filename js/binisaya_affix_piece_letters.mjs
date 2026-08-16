import { text_skip } from "./text_skip.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function binisaya_affix_piece_letters(piece) {
  "The letters of a piece as they are worth showing a reader.";
  "A prefix and a suffix keep the dash they are written with, because the dash is where the root goes and a reader seeing ipa- reads it as something with a word after it. The caret an infix is marked with says nothing to anybody and is a mark for the site's own machine, so it comes off.";
  let marked = text_starts_with(piece, "^");
  if (marked) {
    let letters = text_skip(piece, 1);
    return letters;
  }
  return piece;
}
