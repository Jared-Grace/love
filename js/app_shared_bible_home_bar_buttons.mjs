import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_button_chapter_previous } from "./app_shared_bible_button_chapter_previous.mjs";
import { app_shared_screen_set_button } from "./app_shared_screen_set_button.mjs";
import { app_shared_bible_books } from "./app_shared_bible_books.mjs";
export function app_shared_bible_home_bar_buttons(
  bar,
  context,
  chapter_code,
  book_name,
) {
  arguments_assert(arguments, 4);
  app_shared_bible_button_chapter_previous(bar, context, chapter_code);
  app_shared_screen_set_button(bar, context, app_shared_bible_books, book_name);
}
