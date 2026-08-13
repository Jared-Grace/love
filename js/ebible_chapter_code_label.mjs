import { ebible_book_code_label } from "./ebible_book_code_label.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ebible_chapter_code_label(chapter_code) {
  "How to name a chapter to a reader: the book spelled out and the number after it, John 4 rather than JHN04.";
  "The code is what a link carries and what nobody reads. Offering a reader JHN04 to press asks them to recognise the very spelling they just got wrong.";
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let book_name = ebible_book_code_label(book_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let label = text_combine_multiple([book_name, " ", chapter_name]);
  return label;
}
