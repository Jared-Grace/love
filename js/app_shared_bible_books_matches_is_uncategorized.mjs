import { property_in_list_not } from "./property_in_list_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_books_matches_is_uncategorized(
  book,
  known_codes,
) {
  arguments_assert(arguments, 2);
  let unknown = property_in_list_not(book, "book_code", known_codes);
  return unknown;
}
