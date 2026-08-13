import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_book_code_known_is(book_code) {
  "Whether the three letters a link names a book by are one of the sixty-six - JHN is, JOH is not.";
  "The books can be asked about without fetching anything, so this settles before a link has been trusted enough to fetch a bible for.";
  let codes = ebible_book_codes();
  let known = list_includes(codes, book_code);
  return known;
}
