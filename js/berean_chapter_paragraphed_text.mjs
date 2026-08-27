import { arguments_assert } from "./arguments_assert.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_chapter_paragraphed_text } from "./usfm_chapter_paragraphed_text.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
export async function berean_chapter_paragraphed_text(
  book_code,
  chapter_number,
  verse_numbers_shown,
) {
  arguments_assert(arguments, 3);
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_numbers_shown");
  ("One chapter of the Berean release, laid out as plain writing with its passage named at the top - the shape a person wants when they are copying a psalm into something else.");
  ("The em dashes are closed on the way out, by the same reading and for the same reason as the verse reader closes them: the marked-up release spaces them and the publisher's own plain-text edition does not, so the spaces are the converter's and not the printing's. This is english, so closing them is right here and would not be right for a bible in french.");
  ("The passage is named at the top because writing arrives somewhere else with nothing around it to say what it is. A psalm pasted into a document with no reference on it is a psalm somebody has to go and look up again.");
  ("The name is the one this repo already shows readers rather than the three letters the publisher files the book under. Nobody reads PSA.");
  let file_path = berean_book_path(book_code);
  let usfm = await file_read(file_path);
  let body = usfm_chapter_paragraphed_text(
    usfm,
    chapter_number,
    verse_numbers_shown,
  );
  let closed = em_dashes_closed(body);
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  let title = text_combine_multiple([book_name, " ", chapter_number]);
  let text = list_join_newline_2([title, closed]);
  return text;
}
