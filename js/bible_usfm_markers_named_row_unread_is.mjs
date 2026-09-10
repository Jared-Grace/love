import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function bible_usfm_markers_named_row_unread_is(row) {
  arguments_assert(arguments, 1);
  ("$plain row");
  ("Whether one bible in the shelf reading gave up no books at all, and so was never read rather than found clean.");
  let books = property_get(row, "books");
  let unread = equal(books, 0);
  return unread;
}
