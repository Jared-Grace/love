import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
export function js_two_operator_line_parts(words, value_of) {
  "the five things a line of the shape value operator value operator value is made of, handed back by name: the value on the left, the operator after it, the value in the middle, the second operator, and the value on the right.";
  "THE WAY A VALUE IS READ IS HANDED IN, because that is the only thing that differs between the lines this serves. A line of arithmetic spells its values as numbers and a line of true and false spells them as those two words; where each value sits, and which two words between them are the operators, is the same fact in both.";
  "Reading them by name rather than by counting is what this is for. Three places were each writing out the same five reads, and the fourth and fifth of those - the ones furthest from the eye - are exactly where an index typed one out is silently a different line rather than an error.";
  "Nothing is said here about how many words there are. A caller that only accepts a five-word line says so where the line arrives, so a line of the wrong shape is refused with the caller's own words rather than quietly losing whatever sat past the fifth.";
  arguments_assert(arguments, 2);
  let left = value_of(list_get(words, 0));
  let first_operator = list_get(words, 1);
  let middle = value_of(list_get(words, 2));
  let second_operator = list_get(words, 3);
  let right = value_of(list_get(words, 4));
  let r = {
    left,
    first_operator,
    middle,
    second_operator,
    right,
  };
  return r;
}
