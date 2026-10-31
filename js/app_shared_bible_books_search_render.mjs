import { app_shared_bible_books_render } from "./app_shared_bible_books_render.mjs";
import { app_shared_bible_books_question_text } from "./app_shared_bible_books_question_text.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_search_books_text } from "./app_shared_search_books_text.mjs";
import { app_shared_search_render } from "./app_shared_search_render.mjs";
export function app_shared_bible_books_search_render(
  content,
  books,
  on_open,
  current_book_code,
) {
  "a search box on top for readers who know the name, and the full canon grouped by section below for readers who browse; the box itself is the shared one every picker in the app uses, so a search reads and looks the same wherever it is met";
  "both bible readers choose a book the same way, so the whole picker is drawn here once: the verse reader opens it as its own screen and the whole-chapter reader opens it in place over the text, and all that differs between them is where it is drawn and what a chosen book does";
  function on_query(list_div, query) {
    app_shared_bible_books_render(
      list_div,
      query,
      books,
      on_open,
      current_book_code,
    );
  }
  ("the picker opens with the question it is asking, above the search box, the same way the chapter and verse pickers do");
  let question = app_shared_bible_books_question_text();
  let question_div = html_div_text_centered(content, question);
  let color = app_shared_color_blue_dark();
  html_font_color_set(question_div, color);
  let search_text = app_shared_search_books_text();
  app_shared_search_render(content, search_text, on_query);
}
