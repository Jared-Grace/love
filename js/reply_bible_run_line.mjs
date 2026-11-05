import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_last } from "./list_last.mjs";
import { prayer_amen } from "./prayer_amen.mjs";
import { not } from "./not.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function reply_bible_run_line(run) {
  arguments_assert(arguments, 1);
  ("The reply line for one run of verses: 1 John 4:7-10 Amen! when the sender said them whole, and Amen! with the citation and the verses when they only said part.");
  let verses = property_get(run, "verses");
  let quote = property_get(run, "quote");
  let chapter_code = property_get(run, "chapter_code");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let first = list_first(verses).verse_number;
  let citation = `${book_name} ${chapter_name}:${first}`;
  let a = list_size(verses);
  if (greater_than(a, 1)) {
    citation = `${citation}-${list_last(verses).verse_number}`;
  }
  let amen = prayer_amen();
  if (not(quote)) {
    let r = `${citation} ${amen}`;
    return r;
  }
  let list = list_map_property(verses, "text");
  let words = list_join_space(list);
  let r2 = `${amen} ${citation} ${words}`;
  return r2;
}
