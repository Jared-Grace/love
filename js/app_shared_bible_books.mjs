import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { app_shared_bible_screen_content } from "./app_shared_bible_screen_content.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { app_shared_bible_books_render } from "./app_shared_bible_books_render.mjs";
export async function app_shared_bible_books(context) {
  let opened = await app_shared_bible_screen_content(context);
  let content = property_get(opened, "content");
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  ("the book being read now, so its button can be marked in the list");
  let hash = html_hash_object_get();
  let current_chapter_code = app_shared_bible_chapter_hash_get(hash);
  let current_book_code = ebible_chapter_code_to_book(current_chapter_code);
  async function on_open(book) {
    "open a chosen book at its first chapter, then hand off to the chapter picker";
    let book_code = property_get(book, "book_code");
    let chapter_code = ebible_chapter_code_pad(book_code, "1");
    app_shared_bible_chapter_set(chapter_code);
    await app_shared_screen_set(context, app_shared_bible_chapters);
  }
  ("a search box on top for readers who know the name, and the full canon grouped by section below for readers who browse; styled with the shared input look the search app uses, so every search box reads the same");
  let search = html_input_text(content, "Search books");
  app_shared_input_style(search);
  let list_div = html_div(content);
  function on_input() {
    let query = html_value_get(search);
    app_shared_bible_books_render(
      list_div,
      query,
      books,
      on_open,
      current_book_code,
    );
  }
  html_on_input(search, on_input);
  app_shared_bible_books_render(
    list_div,
    "",
    books,
    on_open,
    current_book_code,
  );
}
