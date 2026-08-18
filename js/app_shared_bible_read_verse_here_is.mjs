import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passage_kept_set } from "./app_shared_bible_passage_kept_set.mjs";
import { app_shared_bible_book_chapter } from "./app_shared_bible_book_chapter.mjs";
import { app_shared_bible_read_view_whole_chapter } from "./app_shared_bible_read_view_whole_chapter.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_arrow_left } from "./app_shared_button_arrow_left.mjs";
import { app_shared_button_arrow_right } from "./app_shared_button_arrow_right.mjs";
import { app_shared_bible_settings_gear } from "./app_shared_bible_settings_gear.mjs";
import { app_shared_bible_fetch_language } from "./app_shared_bible_fetch_language.mjs";
import { list_map_unordered_add_async } from "./list_map_unordered_add_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_shared_bible_hash_field_verse } from "./app_shared_bible_hash_field_verse.mjs";
import { app_shared_hash_fields_unknown_told_is } from "./app_shared_hash_fields_unknown_told_is.mjs";
import { list_includes } from "./list_includes.mjs";
export async function app_shared_bible_read_verse_here_is(
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
) {
  arguments_assert(arguments, 13);
  app_shared_bible_passage_kept_set(
    context,
    chapter_code,
    verse_numbers_chosen,
  );
  let languages_verses = [];
  let updates = [];
  let verse_rows = [];
  if (ref_mode) {
    app_shared_bible_book_chapter(bar, content, chapter_code, books);
    function view_whole_chapter() {
      let r5 = app_shared_bible_read_view_whole_chapter(
        primary_verses,
        chapter_code,
      );
      return r5;
    }
    app_shared_button(bar, "View whole chapter", view_whole_chapter);
  } else {
    app_shared_button_arrow_left(bar, chapter_previous);
    app_shared_bible_book_chapter(bar, content, chapter_code, books);
    app_shared_button_arrow_right(bar, chapter_next);
  }
  app_shared_bible_settings_gear(
    bar,
    content,
    languages_chosen,
    context,
    count_status,
  );
  async function fetch_language(lc) {
    let r = await app_shared_bible_fetch_language(
      lc,
      ref_mode,
      ref_line,
      chapter_code,
    );
    return r;
  }
  await list_map_unordered_add_async(
    languages_chosen,
    fetch_language,
    languages_verses,
  );
  languages_verses = list_filter_null_not_is(languages_verses);
  let show_language_names = list_multiple_is(languages_verses);
  let primary_verses = list_last_property(languages_verses, "verses");
  ("A verse number in the link that this chapter does not have is answered here and nowhere earlier, because until the chapter is fetched there is nothing to answer it against. The chapter is drawn all the same - somebody who asked for a verse that is not there still wanted this chapter - so the correction sits above the text rather than instead of it.");
  let property_name = verse_number_key();
  let verse_numbers_here = list_map_property(primary_verses, property_name);
  let verse_field = app_shared_bible_hash_field_verse(verse_numbers_here);
  app_shared_hash_fields_unknown_told_is(content, hash, [verse_field]);
  ("Having said so, the page stops treating the verse as chosen. A number this chapter does not have cannot be highlighted, cannot be counted, and cannot be scrolled to - and the scrolling was the loud one: looking for a row that is not there threw, and the reader got a wall of error text under the chapter where the answer to their link should have been.");
  function verse_here_is(verse_number_chosen) {
    let here = list_includes(verse_numbers_here, verse_number_chosen);
    return here;
  }
  let r2 = {
    languages_verses,
    updates,
    verse_rows,
    show_language_names,
    primary_verses,
    verse_here_is,
  };
  return r2;
}
