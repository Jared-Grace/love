import { text_includes } from "./text_includes.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export function gloss_term_written_is(wording, term) {
  "Whether a piece of writing uses a given word, asked so that a word standing inside a longer word does not count.";
  "Both sides are lowered, and both are given a space at the front, so a word opening the wording is still found and a word that only sits inside another one is not. Without the space, 'perfect' is inside 'imperfect' and inside 'pluperfect', and an explanation naming one tense would be read as naming three - which turns a single wrong claim into three findings and a right one into two.";
  "Only the front is guarded and not the end, on purpose. What follows a grammatical word in a sentence is a comma, a full stop, or an ending the word has taken on, and refusing all of those would reject the ordinary ways English writes.";
  let wording_lower = text_lower_to(wording);
  let wording_padded = " " + wording_lower;
  let term_lower = text_lower_to(term);
  let term_padded = " " + term_lower;
  let written = text_includes(wording_padded, term_padded);
  return written;
}
