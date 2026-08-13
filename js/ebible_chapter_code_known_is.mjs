import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_chapter_code_known_is(chapter_code) {
  "Whether the chapter a link names begins with a book of the bible - JHN04 does, JOH04 does not.";
  "Only the book part is judged, and the number after it is taken on trust. How many chapters a book has is not written down anywhere a page can read before it fetches a bible, and a check that had to fetch first would be running after the very failure it exists to catch. The book part is also where the mistake actually is: the number is copied off a page somebody was already reading, and the three letters are the part nobody knows by heart.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let codes = ebible_book_codes();
  let named = list_includes(codes, book_code);
  return named;
}
