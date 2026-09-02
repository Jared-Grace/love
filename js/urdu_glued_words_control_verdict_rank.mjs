import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function urdu_glued_words_control_verdict_rank(verdict) {
  "$plain verdict";
  "Where a ruling belongs in a reading order chosen by how much a reader is needed on it, as a number that sorts smallest first.";
  "A ruling the control contradicts comes first, because that is a place where somebody who reads the language has already been shown to have written it the other way, and it is the likeliest of all of them to be wrong.";
  "A word the control writes both ways comes next: nothing is settled, and settling it needs the one thing a count cannot supply, which is somebody reading the sentence.";
  "Then the ones the control never mentions, because nothing has checked them at all and a silence is not agreement.";
  "The ones the control agrees with come last. They are the ones a reader can skip, and putting them at the end is what makes the list finishable - a reader who stops halfway has read every ruling that needed reading.";
  "Asked for by name from a table rather than worked out, so a verdict nobody has given an order to stops the reading instead of quietly sorting as though it were the first one.";
  arguments_assert(arguments, 1);
  let ranks = {
    disagrees: 0,
    both: 1,
    silent: 2,
    agrees: 3,
  };
  let rank = property_get(ranks, verdict);
  return rank;
}
