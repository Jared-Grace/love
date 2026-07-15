import { html_clear } from "./html_clear.mjs";
import { app_replace_button_back } from "./app_replace_button_back.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_replace_button_list_centered } from "./app_replace_button_list_centered.mjs";
import { property_get } from "./property_get.mjs";
import { app_chapter_book_open } from "./app_chapter_book_open.mjs";
export function app_chapter_books_choose(content, books) {
  html_clear(content);
  app_replace_button_back(content, window_reload);
  function item_to_text(book) {
    return property_get(book, "text");
  }
  function on_click(book) {
    let book_code = property_get(book, "book_code");
    app_chapter_book_open(book_code);
  }
  app_replace_button_list_centered(content, books, item_to_text, on_click);
}
