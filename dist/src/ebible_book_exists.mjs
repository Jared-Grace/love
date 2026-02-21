import { list_find_property_or_null } from "../../../love/public/src/list_find_property_or_null.mjs";
export function ebible_book_exists(books, book_code) {
  let book = list_find_property_or_null(books, "book_code", book_code);
  let v = book != null;
  return v;
}
