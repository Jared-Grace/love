import { not_equal_loose } from "./not_equal_loose.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
export function ebible_book_exists(books, book_code) {
  let book = list_find_property_or_null(books, "book_code", book_code);
  let v = not_equal_loose(book, null);
  return v;
}
