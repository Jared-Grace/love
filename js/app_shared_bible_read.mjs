import { app_shared_bible_read_verse_here_is } from "./app_shared_bible_read_verse_here_is.mjs";
import { app_shared_bible_read_resume } from "./app_shared_bible_read_resume.mjs";
import { app_shared_bible_read_count_foot } from "./app_shared_bible_read_count_foot.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_read_frame } from "./app_shared_bible_read_frame.mjs";
import { app_shared_bible_read_verse_row } from "./app_shared_bible_read_verse_row.mjs";
import { app_shared_bible_hash_verse_numbers } from "./app_shared_bible_hash_verse_numbers.mjs";
import { app_shared_bible_reference_spaced } from "./app_shared_bible_reference_spaced.mjs";
import { app_shared_bible_hash_field_reference } from "./app_shared_bible_hash_field_reference.mjs";
import { app_shared_hash_fields_unknown_shown_is } from "./app_shared_hash_fields_unknown_shown_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
import { app_shared_bible_chapter_code_default } from "./app_shared_bible_chapter_code_default.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_book_hash_get } from "./app_shared_bible_book_hash_get.mjs";
import { app_shared_bible_read_count_refresh } from "./app_shared_bible_read_count_refresh.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { app_shared_bible_settings_gear } from "./app_shared_bible_settings_gear.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_ref_chapter_code } from "./app_shared_bible_ref_chapter_code.mjs";
import { app_shared_bible_ref_chapter_codes } from "./app_shared_bible_ref_chapter_codes.mjs";
import { app_shared_bible_ref_chapters_guard } from "./app_shared_bible_ref_chapters_guard.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { promise_later } from "./promise_later.mjs";
import { list_map_add_async } from "./list_map_add_async.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_choose_chapter } from "./app_shared_bible_choose_chapter.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_last } from "./list_last.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_dismissable_message } from "./app_shared_dismissable_message.mjs";
import { app_shared_bible_change } from "./app_shared_bible_change.mjs";
import { list_previous_wrap } from "./list_previous_wrap.mjs";
import { list_next_wrap } from "./list_next_wrap.mjs";
export async function app_shared_bible_read(context, verse_action) {
  let r3 = app_shared_bible_read_frame(context);
  let help_text = property_get(r3, "help_text");
  let max = property_get(r3, "max");
  let t = property_get(r3, "t");
  let bar = property_get(r3, "bar");
  let content = property_get(r3, "content");
  let shell = property_get(r3, "shell");
  let hash = html_hash_object_get();
  ("A language code in the link that names no bible we have is answered here rather than read past. Read past, it was dropped without a word and the chapter opened in whatever languages happened to be left - so somebody sent a link with one letter wrong read the wrong bible and nothing anywhere said so. It is the same screen the sent-a-verse page shows, from the same function, so a wrong link reads the same whichever bible surface it lands on.");
  let unknown_shown = app_shared_bible_hash_unknown_shown_is(content, hash);
  if (unknown_shown) {
    return;
  }
  let c = app_shared_bible_chapter_hash_get_or_empty(hash);
  let b = app_shared_bible_book_hash_get(hash);
  let key = app_shared_bible_reference_hash_key();
  let ref = property_get_or(hash, key, "");
  let ref_line = app_shared_bible_reference_spaced(ref);
  let ref_mode = text_empty_is(c) && text_empty_not_is(ref);
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  let language = list_last(languages_chosen);
  let primary_folder = ebible_language_to_bible_folder(language);
  let books = await ebible_version_books_browser(primary_folder);
  html_centered(bar);
  if (text_empty_is(c) && text_empty_is(ref) && text_empty_not_is(b)) {
    await app_shared_bible_choose_chapter(
      bar,
      content,
      b,
      books,
      primary_folder,
      context,
    );
    app_shared_bible_settings_gear(bar, content, languages_chosen, context);
    return;
  }
  let bible_folder = ebible_folder_english();
  let books_en = await ebible_version_books_browser(bible_folder);
  if (ref_mode) {
    ("A reference in the link naming no book we have is answered here rather than read past. Read past, the reading of it came back with nothing, the link stopped counting as a reference, and Genesis 1 opened - so one wrong letter in a book name sent the reader to the front of the bible with nothing anywhere saying why.");
    ("It stops the page rather than sitting above the chapter, which is what the verse correction does, because the two are not the same kind of wrong. A verse this chapter has not got still came with the chapter the reader meant, so there is something right to draw; a book we cannot find leaves no chapter at all, and any chapter drawn under the correction would be one nobody asked for.");
    let reference_field = app_shared_bible_hash_field_reference(books_en);
    let reference_shown = app_shared_hash_fields_unknown_shown_is(
      content,
      hash,
      [reference_field],
    );
    if (reference_shown) {
      return;
    }
    let ref_chapters = app_shared_bible_ref_chapter_codes(ref_line, books_en);
    if (list_multiple_is(ref_chapters)) {
      app_shared_bible_ref_chapters_guard(content, ref_chapters, books_en);
      app_shared_bible_settings_gear(bar, content, languages_chosen, context);
      return;
    }
  }
  let dismiss_help = app_shared_dismissable_message(
    app_shared_bible_read,
    "chapter_help_dismissed",
    bar,
    help_text,
  );
  let count_status = app_shared_bible_read_count_foot(shell);
  let chapter_code = text_empty_is(c)
    ? app_shared_bible_chapter_code_default()
    : c;
  if (ref_mode) {
    let ref_chapter = await app_shared_bible_ref_chapter_code(ref_line);
    if (null_is(ref_chapter)) {
      ref_mode = false;
    } else {
      chapter_code = ref_chapter;
    }
  }
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
  let r = await app_shared_bible_read_verse_here_is(
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
  );
  let verse_here_is = property_get(r, "verse_here_is");
  let primary_verses = property_get(r, "primary_verses");
  let show_language_names = property_get(r, "show_language_names");
  let verse_rows = property_get(r, "verse_rows");
  let updates = property_get(r, "updates");
  let languages_verses = property_get(r, "languages_verses");
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
  await list_map_add_async(primary_verses, render_verse, updates);
  html_page_bottom_space(content);
  app_shared_bible_read_count_refresh(verse_numbers_chosen, max, count_status);
  async function resume() {
    let r4 = await app_shared_bible_read_resume(
      verse_numbers_chosen,
      updates,
      verse_rows,
    );
    return r4;
  }
  promise_later(resume);
}
