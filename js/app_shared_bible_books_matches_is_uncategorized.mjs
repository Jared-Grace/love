import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function app_shared_bible_books_matches_is_uncategorized(
  book,
  known_codes,
) {
  arguments_assert(arguments, 2);
  let code = property_get(book, "book_code");
  let unknown = list_includes_not(known_codes, code);
  return unknown;
}
