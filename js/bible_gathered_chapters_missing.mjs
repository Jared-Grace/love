import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { greater_than } from "./greater_than.mjs";
import { subtract } from "./subtract.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { not } from "./not.mjs";
export function bible_gathered_chapters_missing(codes) {
  "Every run of whole chapters that nobody gathered at all, found from the numbers of the chapters on either side of it, together with the books those numbers were sorted into.";
  "A WHOLE CHAPTER NOBODY GATHERED LEAVES NO KEY TO LOOK INSIDE, so it is found the same way one verse range is - by the numbers on either side of it. GEN10 is the case that forced this: it is a chapter of descent, deliberately left out, and until the chapter numbers were looked at as well it was invisible to a reader who only asked about verses.";
  "THE BOOK CODE IS THE FIRST THREE CHARACTERS because every book code is three characters, and the rest of a chapter code is its number. Reading the digits out of the whole code would put the one in 1SA into the chapter number.";
  "THE BOOKS COME BACK ALONGSIDE THE HOLES because the sorting into books is done here and the answer this feeds wants to say which books were looked at. Asked for separately it would be the same walk over the same codes a second time.";
  arguments_assert(arguments, 1);
  let books = {};
  function each_book_code(code) {
    let book = code.slice(0, 3);
    let v = code.slice(3);
    let number = Number(v);
    let held = books[book];
    if (not(held)) {
      held = [];
      books[book] = held;
    }
    list_add(held, number);
  }
  each(codes, each_book_code);
  let book_codes = object_property_names(books);
  let missing = [];
  function each_book(book) {
    function number_itself(number) {
      let r = number;
      return r;
    }
    let numbers = list_sort_number_mapper(books[book], number_itself);
    let reached = 0;
    function each_number(number) {
      let after = reached + 1;
      if (greater_than(number, after)) {
        let hole = {
          book_code: book,
          from: after,
          to: subtract(number, 1),
        };
        list_add(missing, hole);
      }
      reached = number;
    }
    each(numbers, each_number);
  }
  each(book_codes, each_book);
  let found = {
    missing,
    book_codes,
  };
  return found;
}
