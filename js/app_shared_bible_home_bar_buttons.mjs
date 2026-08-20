import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_bible_button_chapter_next } from "./app_shared_bible_button_chapter_next.mjs";
import { app_shared_bible_verses } from "./app_shared_bible_verses.mjs";
import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { app_shared_bible_settings } from "./app_shared_bible_settings.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_button_chapter_previous } from "./app_shared_bible_button_chapter_previous.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
export function app_shared_bible_home_bar_buttons(
  bar,
  context,
  chapter_code,
  book_name,
  chapter_name,
  verse_number_hash,
) {
  arguments_assert(arguments, 6);
  ("the one row of buttons over a verse: back a chapter, the book, the chapter, on a chapter, the verse, and the settings gear. They are written together here because the reader reads them as one row and their order is the only thing holding them in that order.");
  ("and since that order is all that holds them, this is where the row is told which end to begin it at. A reader of Urdu meets the row from the right, so back a chapter has to be the first thing their eye lands on rather than the last.");
  let rtl = app_shared_rtl_is();
  html_direction_rtl_set(bar, rtl);
  app_shared_bible_button_chapter_previous(bar, context, chapter_code);
  app_shared_screen_set_button(bar, context, app_shared_bible_books, book_name);
  app_shared_screen_set_button(
    bar,
    context,
    app_shared_bible_chapters,
    chapter_name,
  );
  app_shared_bible_button_chapter_next(bar, context, chapter_code);
  app_shared_screen_set_button(
    bar,
    context,
    app_shared_bible_verses,
    verse_number_hash,
  );
  let text = app_shared_gear_settings_text();
  app_shared_screen_set_button(bar, context, app_shared_bible_settings, text);
}
