import { ebible_book_code_apart_maximum } from "./ebible_book_code_apart_maximum.mjs";
import { ebible_book_word_apart } from "./ebible_book_word_apart.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { items_nearest } from "./items_nearest.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
export function ebible_book_code_suggestions(word) {
  "The codes of the books of the bible closest to what somebody wrote where a book should be - what to offer when a link names a book that is not one.";
  "It may come back empty, and an empty answer is an answer: nothing here is spelled anything like what the link says, so there is nothing honest to offer and the page should say so rather than name its least unlike book.";
  let books = ebible_books_engbsb();
  let word_upper = text_upper_to(word);
  function lambda$apart(book) {
    let apart = ebible_book_word_apart(book, word_upper);
    return apart;
  }
  let apart_maximum = ebible_book_code_apart_maximum();
  let nearest = items_nearest(books, lambda$apart, apart_maximum);
  let codes = list_map_property(nearest, "book_code");
  return codes;
}
