import { regex_punctuation } from "./regex_punctuation.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export function text_punctuation_split(t) {
  "The words one piece of text carries, cut apart wherever punctuation stands, in whatever script it is written in.";
  "This is the reader to reach for over the one beside it that only takes punctuation out, because a dash standing between two words with no space either side welds them into one when the dash is merely deleted - and a welded pair then reads as a word nobody wrote, and as two explanations too many.";
  "The accents and the vowel points ride with their letters rather than cutting a word in half, since they are part of it. Nothing empty comes back, so a run of marks in the middle of a line adds no words.";
  let r = regex_punctuation();
  let parts = t.split(r);
  let words = list_filter_text_empty_not_is(parts);
  return words;
}
