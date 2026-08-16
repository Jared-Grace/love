import { text_replace } from "./text_replace.mjs";
export function text_quote_marks_removed(text) {
  "The same text with every quote mark taken out of it, straight and curly alike.";
  "Prose written by a machine quotes a word in whichever mark it feels like reaching for, and the four in use here are not interchangeable to anything that compares text. Taking all four out first means a phrase can be looked for once instead of once per mark, and a phrase that would have been missed only because the quote was curly is found.";
  "This is for comparing, never for showing. What comes back reads worse than what went in, so nothing a reader sees should be built from it.";
  let straight_single = text_replace(text, "'", "");
  let straight_double = text_replace(straight_single, '"', "");
  let curly_open = text_replace(straight_double, "‘", "");
  let r = text_replace(curly_open, "’", "");
  return r;
}
