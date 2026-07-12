import { integer_to_try } from "./integer_to_try.mjs";
import { list_map } from "./list_map.mjs";
export function integer_to_try_multiple(verse_numbers) {
  let mapped = list_map(verse_numbers, integer_to_try);
  return mapped;
}
