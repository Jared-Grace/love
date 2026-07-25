import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_book_open } from "./app_shared_bible_book_open.mjs";
export function app_shared_bible_books_choose(content, books) {
  app_shared_bible_panel_open(content, window_reload);
  function item_to_text(book) {
    let value = property_get(book, "text");
    return value;
  }
  function on_click(book) {
    let book_code = property_get(book, "book_code");
    app_shared_bible_book_open(book_code);
  }
  app_shared_button_list_centered(content, books, item_to_text, on_click);
}
