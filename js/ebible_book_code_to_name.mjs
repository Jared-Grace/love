import { property_get } from "./property_get.mjs";
import { list_find_property } from "./list_find_property.mjs";
export function ebible_book_code_to_name(books, book_code) {
  let book = list_find_property(books, "book_code", book_code);
  let book_name = property_get(book, "text");
  return book_name;
}
