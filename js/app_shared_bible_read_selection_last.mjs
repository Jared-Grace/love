import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_last } from "./list_last.mjs";
export function app_shared_bible_read_selection_last(verse_numbers_chosen) {
  arguments_assert(arguments, 1);
  if (list_empty_is(verse_numbers_chosen)) {
    return null;
  }
  let sorted = list_copy(verse_numbers_chosen);
  list_sort_number_mapper(sorted, integer_to_try);
  let last = list_last(sorted);
  return last;
}
