import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function ebible_book_codes() {
  "The three-letter code of every book of the bible, and the whole of what the book part of a chapter in a link is allowed to say.";
  "It is read off the English bible, which is baked into the page rather than fetched, so this can be asked before a link has been trusted enough to fetch anything for. The books are the same sixty-six whichever bible a link names, so reading them off one of them costs nothing.";
  let books = ebible_books_engbsb();
  let codes = list_map_property(books, "book_code");
  return codes;
}
