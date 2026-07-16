import { list_copy } from "./list_copy.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { list_join } from "./list_join.mjs";
import { text_split } from "./text_split.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { clipboard_copy } from "./clipboard_copy.mjs";
export async function app_shared_bible_share(
  book_name,
  chapter_name,
  verse_numbers_chosen,
  languages_chosen,
) {
  let sorted = list_copy(verse_numbers_chosen);
  list_sort_number_mapper(sorted, integer_to_try);
  let first = list_first(sorted);
  let last = list_last(sorted);
  let range = first;
  let single = equal(first, last);
  if (not(single)) {
    range = text_combine_multiple([first, "-", last]);
  }
  let book_plus = list_join(text_split(book_name, " "), "+");
  let reference = text_combine_multiple([
    book_plus,
    "+",
    chapter_name,
    ":",
    range,
  ]);
  let languages = list_join(languages_chosen, "+");
  let base = html_url_without_hash();
  let url = text_combine_multiple([base, "#ref=", reference, ",l=", languages]);
  await clipboard_copy(url);
}
