import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { app_shared_bible_language_hash_key } from "./app_shared_bible_language_hash_key.mjs";
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
import { window_share } from "./window_share.mjs";
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
  let verse_range = first;
  let single = equal(first, last);
  if (not(single)) {
    verse_range = text_combine_multiple([first, "-", last]);
  }
  let list = text_split(book_name, " ");
  let book_plus = list_join(list, "+");
  let reference = text_combine_multiple([
    book_plus,
    "+",
    chapter_name,
    ":",
    verse_range,
  ]);
  let languages = list_join(languages_chosen, "+");
  let base = html_url_without_hash();
  ("the two words this link stands on are frozen, so they are read off the functions that hold them rather than spelled into the joined-up text - a word fused into a separator is invisible to everything that watches for a wording change");
  let v = app_shared_bible_reference_hash_key();
  let v2 = app_shared_bible_language_hash_key();
  let url = text_combine_multiple([
    base,
    "#",
    v,
    "=",
    reference,
    ",",
    v2,
    "=",
    languages,
  ]);
  await window_share(url);
}
