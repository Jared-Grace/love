import { app_ceb_bible_gloss_explains_depth_by_book_chapter_read_book_row } from "./app_ceb_bible_gloss_explains_depth_by_book_chapter_read_book_row.mjs";
import { app_ceb_bible_gloss_explains_depth_by_book_chapter_read_chapter_read } from "./app_ceb_bible_gloss_explains_depth_by_book_chapter_read_chapter_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function app_ceb_bible_gloss_explains_depth_by_book_chapter_read(
  by_book,
  explain_key,
) {
  arguments_assert(arguments, 2);
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
  let chapter_read =
    app_ceb_bible_gloss_explains_depth_by_book_chapter_read_chapter_read(
      book_row,
      counted_add,
      entries_pass,
      explain_key,
    );
  return chapter_read;
}
