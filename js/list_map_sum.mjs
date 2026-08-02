import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_sum } from "./list_sum.mjs";
export function list_map_sum(list, lambda$item) {
  arguments_assert(arguments, 2);
  ("A number read off every item, and all of them added up.");
  ("How every total here is worked out - days in a book, verses in a result, bytes");
  ("in a bundle. The list of numbers in between is given a name that nothing else");
  ("ever reads.");
  let numbers = list_map(list, lambda$item);
  let total = list_sum(numbers);
  return total;
}
