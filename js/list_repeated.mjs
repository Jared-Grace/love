import { arguments_assert } from "./arguments_assert.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function list_repeated(list) {
  "$plain list";
  "Every value the list holds more than once, each named once, in the order it first appeared.";
  arguments_assert(arguments, 1);
  ("The answer names VALUES and not positions, because what a caller does with it is say which value went wrong. A list of the second and later occurrences would name the same value several times and leave the caller to thin it again.");
  ("It is the check to reach for wherever a list is supposed to be identities. A key is only an identity while it is unique, so the empty answer is the thing being asserted, and the non-empty answer already reads as the complaint.");
  function repeated_is(value) {
    function same_is(other) {
      let same = equal(other, value);
      return same;
    }
    let count = list_filter_size(list, same_is);
    let repeated = greater_than(count, 1);
    return repeated;
  }
  let unique = list_unique(list);
  let repeated = list_filter(unique, repeated_is);
  return repeated;
}
