import { list_add } from "./list_add.mjs";
import { app_bible_picker_buttons_enlarge } from "./app_bible_picker_buttons_enlarge.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { ebible_book_divisions } from "./ebible_book_divisions.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { each } from "./each.mjs";
export function app_bible_books_render(list_div, query, books, on_open) {
  "re-render the whole grouped book list for the current search text: within each canonical section keep only the books whose name contains the query, and drop a section heading entirely when nothing under it matches, so an empty search shows every section and a typed query narrows to just the hits";
  html_clear(list_div);
  let q = text_lower_to(query);
  let divisions = ebible_book_divisions();
  let all_buttons = [];
  function lambda_division(division) {
    let name = property_get(division, "name");
    let codes = property_get(division, "book_codes");
    function lambda_code(code) {
      let book = list_find_property_or_null(books, "book_code", code);
      return book;
    }
    let books_in = list_map(codes, lambda_code);
    let present = list_filter_null_not_is(books_in);
    function lambda_match(book) {
      let text = property_get(book, "text");
      let lower = text_lower_to(text);
      let m = text_includes(lower, q);
      return m;
    }
    let matching = list_filter(present, lambda_match);
    let empty = list_empty_is(matching);
    let any = not(empty);
    if (any) {
      let header = html_div_text_centered(list_div, name);
      app_shared_text_deemphasized(header);
      let buttons_div = html_div_centered(list_div);
      function lambda_button(book) {
        let text = property_get(book, "text");
        async function lambda_click() {
          await on_open(book);
        }
        let button = app_shared_button(buttons_div, text, lambda_click);
        list_add(all_buttons, button);
      }
      each(matching, lambda_button);
    }
  }
  each(divisions, lambda_division);
  ("size all the shown books together by how many matched, so a narrow search of a few books gets big targets while the full canon stays compact");
  app_bible_picker_buttons_enlarge(all_buttons);
}
