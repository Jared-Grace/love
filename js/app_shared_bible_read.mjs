import { app_shared_bible_read_books } from "./app_shared_bible_read_books.mjs";
import { app_shared_bible_read_render_verse } from "./app_shared_bible_read_render_verse.mjs";
import { app_shared_bible_read_unknown_shown } from "./app_shared_bible_read_unknown_shown.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { app_shared_bible_read_dismiss_help } from "./app_shared_bible_read_dismiss_help.mjs";
import { app_shared_bible_read_resume } from "./app_shared_bible_read_resume.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_read_frame } from "./app_shared_bible_read_frame.mjs";
import { app_shared_bible_hash_field_reference } from "./app_shared_bible_hash_field_reference.mjs";
import { app_shared_hash_fields_unknown_shown_is } from "./app_shared_hash_fields_unknown_shown_is.mjs";
import { app_shared_bible_read_count_refresh } from "./app_shared_bible_read_count_refresh.mjs";
import { app_shared_bible_settings_gear } from "./app_shared_bible_settings_gear.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_shared_bible_ref_chapter_code } from "./app_shared_bible_ref_chapter_code.mjs";
import { app_shared_bible_ref_chapter_codes } from "./app_shared_bible_ref_chapter_codes.mjs";
import { app_shared_bible_ref_chapters_guard } from "./app_shared_bible_ref_chapters_guard.mjs";
import { promise_later } from "./promise_later.mjs";
import { list_map_add_async } from "./list_map_add_async.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_bible_choose_chapter } from "./app_shared_bible_choose_chapter.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { html_centered } from "./html_centered.mjs";
export async function app_shared_bible_read(context, verse_action) {
  let r3 = app_shared_bible_read_frame(context);
  let r6 = app_shared_bible_read_unknown_shown(r3);
  let unknown_shown = property_get(r6, "unknown_shown");
  let hash = property_get(r6, "hash");
  let count_status = property_get(r6, "count_status");
  let content = property_get(r6, "content");
  let bar = property_get(r6, "bar");
  let t = property_get(r6, "t");
  let max = property_get(r6, "max");
  let help_text = property_get(r6, "help_text");
  if (unknown_shown) {
    return;
  }
  let r2 = await app_shared_bible_read_books(hash);
  let books = property_get(r2, "books");
  let primary_folder = property_get(r2, "primary_folder");
  let languages_chosen = property_get(r2, "languages_chosen");
  let ref_mode = property_get(r2, "ref_mode");
  let ref_line = property_get(r2, "ref_line");
  let ref = property_get(r2, "ref");
  let b = property_get(r2, "b");
  let c = property_get(r2, "c");
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
    app_shared_bible_settings_gear(bar, content, context, count_status);
    return;
  }
  let books_en = await app_shared_bible_read_books_en();
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
      await app_shared_bible_ref_chapters_guard(
        content,
        ref_chapters,
        books_en,
      );
      app_shared_bible_settings_gear(bar, content, context, count_status);
      return;
    }
  }
  let r5 = app_shared_bible_read_dismiss_help(bar, help_text, c);
  let dismiss_help = property_get(r5, "dismiss_help");
  let chapter_code = property_get(r5, "chapter_code");
  if (ref_mode) {
    let ref_chapter = await app_shared_bible_ref_chapter_code(ref_line);
    if (null_is(ref_chapter)) {
      ref_mode = false;
    } else {
      chapter_code = ref_chapter;
    }
  }
  let r = await app_shared_bible_read_render_verse(
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
  );
  let render_verse = property_get(r, "render_verse");
  let primary_verses = property_get(r, "primary_verses");
  let verse_rows = property_get(r, "verse_rows");
  let updates = property_get(r, "updates");
  let verse_numbers_chosen = property_get(r, "verse_numbers_chosen");
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
