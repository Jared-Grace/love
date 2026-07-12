import { list_replace_all } from "./list_replace_all.mjs";
import { list_size_max_skip_copy } from "./list_size_max_skip_copy.mjs";
export function list_size_max_skip_replace(verse_numbers_chosen, max) {
  let copy = list_size_max_skip_copy(verse_numbers_chosen, max);
  list_replace_all(verse_numbers_chosen, copy);
}
