import { text_empty_is } from "./text_empty_is.mjs";
import { text_first } from "./text_first.mjs";
import { text_last } from "./text_last.mjs";
import { text_punctuation_removed } from "./text_punctuation_removed.mjs";
import { or } from "./or.mjs";
export function text_punctuation_edged_is(t) {
  "Whether a piece of text carries on its front or its back a mark that is no part of a word - the quotation mark a sentence opens with, the comma or full stop the word happened to be standing in front of.";
  "The middle is left alone on purpose. Cebuano writes a catch in the voice with a dash inside the word - pag-ila, kaloy-i, sad-an, kabubut-on - so a word carrying a mark somewhere in it is the ordinary case, and only the two ends say the word picked something up from the sentence around it.";
  "Empty text has no ends to carry anything and answers no.";
  let empty = text_empty_is(t);
  if (empty) {
    return false;
  }
  let first = text_first(t);
  let last = text_last(t);
  let front = text_punctuation_removed(first);
  let back = text_punctuation_removed(last);
  let front_marked = text_empty_is(front);
  let back_marked = text_empty_is(back);
  let edged = or(front_marked, back_marked);
  return edged;
}
