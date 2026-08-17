import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_shared_bible_books_matches_match_book(book, q) {
  arguments_assert(arguments, 2);
  let text = property_get(book, "text");
  let lower = text_lower_to(text);
  let m = text_includes(lower, q);
  return m;
}
