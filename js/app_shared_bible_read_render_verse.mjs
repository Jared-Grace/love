import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_change } from "./app_shared_bible_change.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
import { app_shared_bible_hash_verse_numbers } from "./app_shared_bible_hash_verse_numbers.mjs";
import { app_shared_bible_read_languages_verses } from "./app_shared_bible_read_languages_verses.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_shared_bible_read_verse_row } from "./app_shared_bible_read_verse_row.mjs";
export async function app_shared_bible_read_render_verse(
  chapter_code,
  languages_chosen,
  hash,
  context,
  ref_mode,
  bar,
  content,
  books,
  ref_line,
  count_status,
  books_en,
  dismiss_help,
  max,
  verse_action,
  t,
) {
  arguments_assert(arguments, 15);
  async function chapter_previous() {
    await app_shared_bible_change(
      chapter_code,
      languages_chosen,
      list_previous_wrap,
    );
  }
  async function chapter_next() {
    await app_shared_bible_change(
      chapter_code,
      languages_chosen,
      list_next_wrap,
    );
  }
  let verse_numbers_chosen = app_shared_bible_hash_verse_numbers(hash);
  ("The passage is remembered for this tab, so that going off to choose another one can be changed one's mind about. A chapter with nothing picked in it is remembered as itself - it is still somewhere a reader was, and coming back to it is coming back to the chapter.");
  let r = await app_shared_bible_read_languages_verses(
    context,
    chapter_code,
    verse_numbers_chosen,
    ref_mode,
    bar,
    content,
    books,
    chapter_previous,
    chapter_next,
    languages_chosen,
    ref_line,
    hash,
    count_status,
  );
  let languages_verses = property_get(r, "languages_verses");
  let updates = property_get(r, "updates");
  let verse_rows = property_get(r, "verse_rows");
  let show_language_names = property_get(r, "show_language_names");
  let primary_verses = property_get(r, "primary_verses");
  let verse_here_is = property_get(r, "verse_here_is");
  verse_numbers_chosen = list_filter(verse_numbers_chosen, verse_here_is);
  async function render_verse(v) {
    let r2 = await app_shared_bible_read_verse_row(
      v,
      chapter_code,
      books_en,
      content,
      updates,
      verse_numbers_chosen,
      languages_verses,
      dismiss_help,
      max,
      count_status,
      show_language_names,
      verse_action,
      context,
      t,
      languages_chosen,
      verse_rows,
    );
    return r2;
  }
  let r3 = {
    verse_numbers_chosen,
    updates,
    verse_rows,
    primary_verses,
    render_verse,
  };
  return r3;
}
