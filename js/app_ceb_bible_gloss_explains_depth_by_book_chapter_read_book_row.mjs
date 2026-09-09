import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
export function app_ceb_bible_gloss_explains_depth_by_book_chapter_read_book_row(
  by_book,
) {
  arguments_assert(arguments, 1);
  function book_row(book) {
    let held = property_get_or_null(by_book, book);
    let b = null_is(held);
    let there = not(b);
    if (there) {
      return held;
    }
    let made = {
      book: book,
      chapters: 0,
      entries: 0,
      explained: 0,
      explain_letters: 0,
      root_claims: 0,
      entries_naming_root: 0,
      affix_claims: 0,
      entries_naming_affix: 0,
    };
    property_set(by_book, book, made);
    return made;
  }
  return book_row;
}
