import { text_lower_to } from "./text_lower_to.mjs";
import { text_replace } from "./text_replace.mjs";
export function binisaya_affix_letters(piece) {
  "The letters of one piece of a word's construction, with the marks that say where it sits taken off.";
  "The same piece is written two ways by the two sources that have to be set against each other. binisaya.com writes where a piece goes with a dash on the side the root is on, or with a caret for the piece that sits inside the root - mag-, -han, ^in. An explanation written for a reader wraps an infix in dashes on both sides instead - '-in-'. Compared as they stand, gi- and 'gi-' agree while ^in and '-in-' do not, and the disagreement is about punctuation rather than about the word.";
  "Where the piece sits is not lost by this, it is asked elsewhere: the kind is read off the marks before they are taken off, and the letters and the kind are then compared one at a time.";
  "$plain piece";
  "it names a piece of shorthand or a piece quoted out of prose, never anything that runs.";
  let lower = text_lower_to(piece);
  let undashed = text_replace(lower, "-", "");
  let r = text_replace(undashed, "^", "");
  return r;
}
