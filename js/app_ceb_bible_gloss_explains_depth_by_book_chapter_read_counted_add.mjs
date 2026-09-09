import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_explains_depth_by_book_chapter_read_book_row } from "./app_ceb_bible_gloss_explains_depth_by_book_chapter_read_book_row.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
export function app_ceb_bible_gloss_explains_depth_by_book_chapter_read_counted_add(
  by_book,
) {
  arguments_assert(arguments, 1);
  function entries_pass(entries) {
    return entries;
  }
  let book_row =
    app_ceb_bible_gloss_explains_depth_by_book_chapter_read_book_row(by_book);
  function counted_add(row, key, more) {
    let was = property_get(row, key);
    let value = add(was, more);
    property_set(row, key, value);
  }
  let r = {
    entries_pass,
    book_row,
    counted_add,
  };
  return r;
}
