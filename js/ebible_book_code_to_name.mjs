import { list_find_property_get } from "./list_find_property_get.mjs";
export function ebible_book_code_to_name(books, book_code) {
  "The printed name of a bible book, looked up from the short code the verse files are keyed by.";
  let book_name = list_find_property_get(books, "book_code", book_code, "text");
  return book_name;
}
