import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { app_shared_content_center_padding } from "./app_shared_content_center_padding.mjs";
import { app_bible_button_back_to_reader } from "./app_bible_button_back_to_reader.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_bible_chapter_set } from "./app_bible_chapter_set.mjs";
import { html_clear_context } from "./html_clear_context.mjs";
import { app_bible_chapters } from "./app_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { app_bible_books_render } from "./app_bible_books_render.mjs";
export async function app_bible_books(context) {
  let root = html_clear_context(context);
  ("push every element into the centered reading column so nothing touches the screen edges left or right, the same full-width-band-with-column-padding the reader uses");
  let column = app_shared_column_max_width();
  app_shared_content_center_padding(root, column);
  await app_bible_button_back_to_reader(root, context);
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  ("the book being read now, so its button can be marked in the list");
  let hash = html_hash_object_get();
  let current_chapter_code = property_get(hash, "c");
  let current_book_code = ebible_chapter_code_to_book(current_chapter_code);
  async function on_open(book) {
    "open a chosen book at its first chapter, then hand off to the chapter picker";
    let book_code = property_get(book, "book_code");
    let chapter_code = ebible_chapter_code_pad(book_code, "1");
    app_bible_chapter_set(chapter_code);
    await app_shared_screen_set(context, app_bible_chapters);
  }
  ("a search box on top for readers who know the name, and the full canon grouped by section below for readers who browse; styled with the shared input look the search app uses, so every search box reads the same");
  let search = html_input_text(root, "Search books");
  app_shared_input_style(search);
  let list_div = html_div(root);
  function on_input() {
    let query = html_value_get(search);
    app_bible_books_render(list_div, query, books, on_open, current_book_code);
  }
  html_on_input(search, on_input);
  app_bible_books_render(list_div, "", books, on_open, current_book_code);
}
