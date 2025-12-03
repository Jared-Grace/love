import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function ebible_book_code_to_name(books, book_code) {
  let book = list_find_property(books, "book_code", book_code);
  let book_name = object_property_get(book, "text");
  return book_name;
}
