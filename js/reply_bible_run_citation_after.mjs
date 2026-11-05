import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
export function reply_bible_run_citation_after(previous, run) {
  arguments_assert(arguments, 2);
  ("How one run of verses is cited after the run before it: Revelation 20:13 alone, then , 15 in the same chapter, ; 21:6-8 in another chapter of the same book, and ; 1 John 3:23 in another book. With no run before it, previous is null and the citation is whole.");
  let verses = property_get(run, "verses");
  let chapter_code = property_get(run, "chapter_code");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let numbers = list_first(verses).verse_number;
  let a = list_size(verses);
  if (greater_than(a, 1)) {
    numbers = `${numbers}-${list_last(verses).verse_number}`;
  }
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  let whole = `${book_name} ${chapter_name}:${numbers}`;
  if (null_is(previous)) {
    return whole;
  }
  let chapter_code_previous = property_get(previous, "chapter_code");
  if (equal(chapter_code, chapter_code_previous)) {
    let same_chapter = `, ${numbers}`;
    return same_chapter;
  }
  let book_code_previous = ebible_chapter_code_to_book(chapter_code_previous);
  if (equal(book_code, book_code_previous)) {
    let same_book = `; ${chapter_name}:${numbers}`;
    return same_book;
  }
  let other_book = `; ${whole}`;
  return other_book;
}
