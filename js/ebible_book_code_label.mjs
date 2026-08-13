import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
export function ebible_book_code_label(book_code) {
  "How to name a book to a reader: John rather than JHN.";
  "The code is what a link carries and what nobody reads. Offering a reader JHN to press asks them to recognise the very spelling they just got wrong.";
  "The code is not put in brackets after, as the chapter beside it does not either. A book name is one of sixty-six a reader already knows, so the name alone tells them which one - where two languages can share a name and two bibles can share a language, and there the code is the only thing telling the guesses apart.";
  let books = ebible_books_engbsb();
  let book_name = ebible_book_code_to_name(books, book_code);
  return book_name;
}
