import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_div } from "./html_div.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_on_input } from "./html_on_input.mjs";
import { app_shared_bible_books_render } from "./app_shared_bible_books_render.mjs";
export function app_shared_bible_books_search_render(
  content,
  books,
  on_open,
  current_book_code,
) {
  "a search box on top for readers who know the name, and the full canon grouped by section below for readers who browse; styled with the shared input look the search app uses, so every search box reads the same";
  "both bible readers choose a book the same way, so the whole picker is drawn here once: the verse reader opens it as its own screen and the whole-chapter reader opens it in place over the text, and all that differs between them is where it is drawn and what a chosen book does";
  let search = html_input_text(content, "Search books");
  app_shared_input_style(search);
  let list_div = html_div(content);
  function render() {
    let query = html_value_get(search);
    app_shared_bible_books_render(
      list_div,
      query,
      books,
      on_open,
      current_book_code,
    );
  }
  html_on_input(search, render);
  ("the first draw reads the box too, so the empty query is not spelled a second time");
  render();
}
