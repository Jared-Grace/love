import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_margin_bottom } from "./html_style_margin_bottom.mjs";
import { not } from "./not.mjs";
import { app_g_verify_home_book_row } from "./app_g_verify_home_book_row.mjs";
export function app_g_verify_home_chapter_grid(
  wrap,
  chapter_codes,
  chapter_code,
) {
  arguments_assert(arguments, 3);
  let cbar = html_div(wrap);
  let value = app_shared_spaced_small_gap();
  html_style_margin_bottom(cbar, value);
  let book_order = [];
  let book_chapters = {};
  function lambda3(code) {
    let book = code.slice(0, 3);
    if (not(book_chapters[book])) {
      book_chapters[book] = [];
      book_order.push(book);
    }
    book_chapters[book].push(code);
  }
  chapter_codes.forEach(lambda3);
  function book_row(book) {
    let r = app_g_verify_home_book_row(book, cbar, chapter_code, book_chapters);
    return r;
  }
  book_order.forEach(book_row);
}
