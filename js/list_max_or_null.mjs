import { integer_is } from "./integer_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_max } from "./list_max.mjs";
export function list_max_or_null(list) {
  "The largest whole number in a list, and nothing at all when the list holds none.";
  "Anything in the list that is not a whole number is passed over rather than compared, so a list part-filled with nothings still answers about the numbers it does hold.";
  "Nothing at all rather than the smallest number there could ever be, because a caller asked for a largest that is not there wants to hear that it is not there. Handed a number instead, it would go on and compare it to something.";
  let numbers = list_filter(list, integer_is);
  let none = list_empty_is(numbers);
  if (none) {
    return null;
  }
  let max = list_max(numbers);
  return max;
}
