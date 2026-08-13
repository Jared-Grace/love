import { list_unique } from "./list_unique.mjs";
import { list_last } from "./list_last.mjs";
import { list_first } from "./list_first.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_parts_to_reference(
  books,
  book_code,
  verse_numbers,
  chapter_name,
) {
  "How a place in the bible is written out for somebody to read: the book, the chapter, and which verses inside it.";
  "Naming no verses names the chapter itself, which is a real place - a whole-chapter reader with nothing picked in it is somewhere, and it is where a reader coming back to it arrives. Before this the empty list was walked as though it held something and the two ends of nothing were printed, so the chapter came out with the word undefined twice where its verses should have been.";
  let book_name = ebible_book_code_to_name(books, book_code);
  let unique = list_unique(verse_numbers);
  let whole = list_empty_is(unique);
  if (whole) {
    let chapter = text_combine_multiple([book_name, " ", chapter_name]);
    return chapter;
  }
  let verse_numbers_s = null;
  let s = list_size_1(unique);
  let first = list_first(unique);
  if (s) {
    verse_numbers_s = first;
  } else {
    let last = list_last(unique);
    verse_numbers_s = text_combine_multiple([first, "-", last]);
  }
  let reference = text_combine_multiple([
    book_name,
    " ",
    chapter_name,
    ":",
    verse_numbers_s,
  ]);
  return reference;
}
