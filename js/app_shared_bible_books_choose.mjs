import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { window_reload } from "./window_reload.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_book_open } from "./app_shared_bible_book_open.mjs";
import { app_shared_bible_books_search_render } from "./app_shared_bible_books_search_render.mjs";
export function app_shared_bible_books_choose(
  content,
  books,
  current_book_code,
  destination,
) {
  "the whole-chapter reader's book picker: drawn in place over the text rather than as its own screen, and otherwise the very same searchable canon grouped into testaments and sections that the verse reader shows";
  "it is handed what to call its way out rather than working it out, because the two places that open it know different amounts: one is standing in a chapter and can name it, the other is between books and cannot.";
  app_shared_bible_panel_open(content, destination, window_reload);
  function on_open(book) {
    let book_code = property_get(book, "book_code");
    app_shared_bible_book_open(book_code);
  }
  app_shared_bible_books_search_render(
    content,
    books,
    on_open,
    current_book_code,
  );
}
