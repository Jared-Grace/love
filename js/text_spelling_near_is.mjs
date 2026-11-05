import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { less_than } from "./less_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { multiply } from "./multiply.mjs";
import { text_edit_distance } from "./text_edit_distance.mjs";
export function text_spelling_near_is(before, after) {
  "Whether two words are spellings of one word: love and loue, son and sonne. At most one letter in three differs, and a word under three letters is never near another, because he and we are not one word.";
  let shortest = math_min(before.length, after.length);
  if (less_than(shortest, 3)) {
    return false;
  }
  let longest = math_max(before.length, after.length);
  let distance = text_edit_distance(before, after);
  let a = multiply(distance, 3);
  let near = less_than_equal(a, longest);
  return near;
}
