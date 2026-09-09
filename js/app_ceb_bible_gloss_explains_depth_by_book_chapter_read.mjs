import { property_get } from "./property_get.mjs";
import { app_ceb_bible_gloss_explains_depth_by_book_chapter_read_counted_add } from "./app_ceb_bible_gloss_explains_depth_by_book_chapter_read_counted_add.mjs";
import { app_ceb_bible_gloss_explains_depth_by_book_chapter_read_chapter_read } from "./app_ceb_bible_gloss_explains_depth_by_book_chapter_read_chapter_read.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_ceb_bible_gloss_explains_depth_by_book_chapter_read(
  by_book,
  explain_key,
) {
  arguments_assert(arguments, 2);
  let r =
    app_ceb_bible_gloss_explains_depth_by_book_chapter_read_counted_add(
      by_book,
    );
  let counted_add = property_get(r, "counted_add");
  let book_row = property_get(r, "book_row");
  let entries_pass = property_get(r, "entries_pass");
  let chapter_read =
    app_ceb_bible_gloss_explains_depth_by_book_chapter_read_chapter_read(
      book_row,
      counted_add,
      entries_pass,
      explain_key,
    );
  return chapter_read;
}
