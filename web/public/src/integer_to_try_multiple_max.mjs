import { list_max } from "../../../love/public/src/list_max.mjs";
import { integer_to_try_multiple } from "../../../love/public/src/integer_to_try_multiple.mjs";
export function integer_to_try_multiple_max(verse_numbers) {
  let mapped = integer_to_try_multiple(verse_numbers);
  let max = list_max(mapped);
  return max;
}
