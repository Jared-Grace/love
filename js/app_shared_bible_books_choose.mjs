import { app_shared_bible_panel_open } from "../../love/js/app_shared_bible_panel_open.mjs";
import { window_reload } from "../../love/js/window_reload.mjs";
import { app_shared_button_list_centered } from "../../love/js/app_shared_button_list_centered.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_shared_bible_book_open } from "../../love/js/app_shared_bible_book_open.mjs";
export function app_shared_bible_books_choose(content, books) {
  app_shared_bible_panel_open(content, window_reload);
  function item_to_text(book) {
    return property_get(book, "text");
  }
  function on_click(book) {
    let book_code = property_get(book, "book_code");
    app_shared_bible_book_open(book_code);
  }
  app_shared_button_list_centered(content, books, item_to_text, on_click);
}
