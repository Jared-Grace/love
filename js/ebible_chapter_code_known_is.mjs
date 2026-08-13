import { ebible_chapter_code_padded_is } from "./ebible_chapter_code_padded_is.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
export function ebible_chapter_code_known_is(chapter_code) {
  "Whether the chapter a link names could be one this bible has - JHN04 could, JOH04 and JHN4 could not.";
  "Two halves are judged and each is judged for what can be settled without fetching anything: the three letters have to be a book, and the number after them has to be written the way this bible writes one. What is taken on trust is only how far the numbers go, because how many chapters a book has is not written down anywhere a page can read before it fetches a bible, and a check that had to fetch first would be running after the very failure it exists to catch.";
  "Both halves are where mistakes actually are. The three letters are the part nobody knows by heart. The nought in front of a single-digit chapter is the part a person leaves off when they type the link themselves, and it is the one that used to get all the way through to a lookup and come back with nothing.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let codes = ebible_book_codes();
  let named = list_includes(codes, book_code);
  let padded = ebible_chapter_code_padded_is(chapter_code);
  let known = named && padded;
  return known;
}
