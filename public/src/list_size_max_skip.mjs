import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { greater_than } from "../../../love/public/src/greater_than.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function list_size_max_skip(verse_numbers_chosen, max) {
  let size = list_size(verse_numbers_chosen);
  if (greater_than(size, max)) {
    verse_numbers_chosen = list_skip(verse_numbers_chosen, size - max);
  }
  return verse_numbers_chosen;
}
