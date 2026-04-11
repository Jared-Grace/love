import { integer_to_try } from "../../../love/public/src/integer_to_try.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function integer_to_try_multiple(verse_numbers) {
  let mapped2 = list_map(verse_numbers, integer_to_try);
  return mapped2;
}
