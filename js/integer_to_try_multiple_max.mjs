import { list_max } from "./list_max.mjs";
import { integer_to_try_multiple } from "./integer_to_try_multiple.mjs";
export function integer_to_try_multiple_max(verse_numbers) {
  let mapped = integer_to_try_multiple(verse_numbers);
  let max = list_max(mapped);
  return max;
}
