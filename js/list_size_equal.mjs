import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export function list_size_equal(list, size) {
  "$plain list";
  "$plain size";
  arguments_assert(arguments, 2);
  ("Whether a list holds exactly the number of things you name.");
  ("The general one. Three named answers to this question already stood - empty, one and two - each written out where the number was known while it was being written, and nothing at all where the number is worked out first.");
  let actual = list_size(list);
  let same = equal(actual, size);
  return same;
}
