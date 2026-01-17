import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
export function ebible_parts_to_reference(
  books,
  book_code,
  verse_numbers,
  chapter_name,
) {
  let book_name = ebible_book_code_to_name(books, book_code);
  let verse_numbers_s = null;
  let unique = list_unique(verse_numbers);
  let s1 = list_size_1(unique);
  let first = list_first(unique);
  if (s1) {
    verse_numbers_s = first;
  } else {
    let last = list_last(unique);
    verse_numbers_s = first + "-" + last;
  }
  const reference = book_name + " " + chapter_name + ":" + verse_numbers_s;
  return reference;
}
