import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { ebible_book_code_to_name } from "../../../love/public/src/ebible_book_code_to_name.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function ebible_parts_to_reference(
  books,
  book_code,
  verse_numbers,
  chapter_name,
) {
  let book_name = ebible_book_code_to_name(books, book_code);
  let verse_numbers_s = null;
  let unique = list_unique(verse_numbers);
  let s = list_size_1(unique);
  let first = list_first(unique);
  if (s) {
    verse_numbers_s = first;
  } else {
    let last = list_last(unique);
    verse_numbers_s = text_combine_multiple([first, "-", last]);
  }
  const reference = text_combine_multiple([
    book_name,
    " ",
    chapter_name,
    ":",
    verse_numbers_s,
  ]);
  return reference;
}
