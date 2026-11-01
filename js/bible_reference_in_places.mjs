import { equal } from "./equal.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
export function bible_reference_in_places(chapter_code, verse_number, places) {
  "Whether one verse lies in any of the places: each place is a book and chapter, like LUK10, which holds every verse of that chapter, or a book, chapter and verse, like ROM16:6, which holds that verse alone.";
  "$plain chapter_code";
  "$plain verse_number";
  "$plain places";
  "the code is a chapter's name, like JHN04; the verse number counts within it; the places are short references like LUK10 or ROM16:6. All are data and none runs.";
  "A CHAPTER WRITTEN WITH OR WITHOUT A LEADING ZERO IS THE SAME CHAPTER, because both sides are compared as numbers - JHN04 lies in JHN4.";
  let book = ebible_chapter_code_to_book(chapter_code);
  let number = ebible_chapter_code_to_number(chapter_code);
  let chapter = Number(number);
  let verse = Number(verse_number);
  let size = ebible_book_code_size();
  for (let place of places) {
    let place_book = place.slice(0, size);
    let parts = place.slice(size).split(":");
    let same_chapter =
      equal(place_book, book) && equal(Number(parts[0]), chapter);
    if (
      same_chapter &&
      (equal(parts.length, 1) || equal(Number(parts[1]), verse))
    ) {
      return true;
    }
  }
  return false;
}
