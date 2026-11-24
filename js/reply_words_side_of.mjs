import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function reply_words_side_of(
  left,
  right,
  words,
  kinds,
  kind_pairs_is,
  unparsable,
) {
  arguments_assert(arguments, 6);
  if (less_than(left, 0) || greater_than_equal(right, words.length)) {
    let none = "none";
    return none;
  }
  let word_left = list_get(words, left);
  let word_right = list_get(words, right);
  let kind_left = list_get(kinds, left);
  let kind_right = list_get(kinds, right);
  if (word_right.cut_before) {
    let none2 = "none";
    return none2;
  }
  let name_beside = equal(kind_left, "name") || equal(kind_right, "name");
  if (name_beside) {
    let none3 = "none";
    return none3;
  }
  let both_pair = kind_pairs_is(kind_left) && kind_pairs_is(kind_right);
  let pair = word_left.word + " " + word_right.word;
  let joins = both_pair && not(unparsable.has(pair));
  let side = joins ? "joins" : "fails";
  return side;
}
