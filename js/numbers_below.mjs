import { each_range } from "./each_range.mjs";
import { list_add } from "./list_add.mjs";
export function numbers_below(count) {
  "Every whole number below the one given, starting at zero";
  "Written out as a list rather than walked, because the thing that needs it hands a list to something that asks all of its items at once";
  let numbers = [];
  function lambda(i) {
    list_add(numbers, i);
  }
  each_range(count, lambda);
  return numbers;
}
