import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bless_people_noun(count) {
  arguments_assert(arguments, 1);
  ("What to call a number of people - 'person' for one of them, 'people' for any other");
  ("number.");
  ("Kept as its own answer because every line that counts people needs it and none of them");
  ("should be deciding it again. A line that wrote the plural straight in reads as broken");
  ("English the moment the count falls to one, and it falls to one constantly here - one");
  ("person in sight is the ordinary state of this game, not an edge of it.");
  if (equal(count, 1)) {
    let one = "person";
    return one;
  }
  let many = "people";
  return many;
}
