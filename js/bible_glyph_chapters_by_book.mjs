import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
export function bible_glyph_chapters_by_book(chapters) {
  arguments_assert(arguments, 1);
  ("$plain chapters");
  ("the chapters are the written picture Bible as ",
    fn_name("bible_glyph_chapters"),
    " hands it over. They are data to read and they do not run.");
  ("The written chapters of the picture Bible gathered under the book each belongs to, the books in the order a Bible puts them and the chapters in the order they were written down.");
  ("THE STORED ORDER IS THE ORDER THEY WERE AUTHORED IN, and that is right where it is kept and wrong where it is shown. The list of chapters is a build log - it opens with the fourth of first John because that is where this Bible started - and the notes beside each entry are about why that chapter was chosen next. A reader has never heard of any of that and is looking for a book.");
  ("SO THE CANON DECIDES THE ORDER AND NOT THIS FILE. The books are walked in the order a Bible has them and a book with nothing written in it is passed over, which means the shape of the page follows the shape of Scripture without anybody keeping a second list in step. The day a chapter of Genesis is written it appears at the top on its own.");
  ("THE CHAPTER CODES ARE PADDED, so ordering them as text orders them as numbers, and the ninth of John comes before the tenth rather than after it. That is a property of how a code is spelled rather than a coincidence, and it is why no number has to be parsed out of anything here.");
  ("IT IS SEPARATE FROM THE PAGE THAT DRAWS IT because the answer is worth having on its own. How much of which book exists is the question every reading of coverage asks, and a page is a bad place to keep it.");
  let books = ebible_books_engbsb();
  let grouped = [];
  for (let book of books) {
    let book_code = property_get(book, "book_code");
    let book_text = property_get(book, "text");
    let held = [];
    for (let chapter of chapters) {
      let chapter_code = property_get(chapter, "chapter_code");
      let code = ebible_chapter_code_to_book(chapter_code);
      let same = equal(code, book_code);
      if (same) {
        list_add(held, chapter);
      }
    }
    let any = list_empty_not_is(held);
    if (any) {
      let sorted = list_sort_text_property(held, "chapter_code");
      let entry = {
        book_code,
        book_text,
        chapters: sorted,
      };
      list_add(grouped, entry);
    }
  }
  return grouped;
}
