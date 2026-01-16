import { list_size_max_skip } from "../../../love/public/src/list_size_max_skip.mjs";
import { list_copy } from "../../../love/public/src/list_copy.mjs";
export function list_size_max_skip_copy(verse_numbers_chosen, max) {
  let copy = list_copy(verse_numbers_chosen);
  list_size_max_skip(copy, max);
  return copy;
}
