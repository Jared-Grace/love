import { arguments_assert } from "./arguments_assert.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
export function list_adder_unique_sorted(lambda$la) {
  arguments_assert(arguments, 1);
  ("Whatever the lambda adds, each item once, in sorted order.");
  let items = list_adder(lambda$la);
  let sorted = list_unique_sorted(items);
  return sorted;
}
