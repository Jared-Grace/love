import { property_equals } from "./property_equals.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { app_shared_container_blue_medium_titled } from "./app_shared_container_blue_medium_titled.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_bible_books_matches } from "./app_bible_books_matches.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_bible_picker_buttons_enlarge } from "./app_bible_picker_buttons_enlarge.mjs";
export function app_bible_books_render(
  list_div,
  query,
  books,
  on_open,
  current_book_code,
) {
  "draw the Old-and-New-Testament to section to books tree as nested cards: a testament card holds a bold centered title and its section cards; each section card holds a blue heading and its book buttons. every shown book is sized together at the end, so a narrow search of a few books gets big targets while the whole canon stays compact";
  html_clear(list_div);
  let testaments = app_bible_books_matches(query, books);
  let all_buttons = [];
  function render_testament(testament) {
    let t_name = property_get(testament, "name");
    let divisions = property_get(testament, "divisions");
    ("tap the testament title to fold or unfold its sections, so a phone reader can collapse a whole testament and jump straight to the other one; the caret shows which way it is");
    let collapsible = app_shared_container_blue_collapsible(list_div, t_name);
    let sections_holder = property_get(collapsible, "body");
    function render_section(section) {
      let s_name = property_get(section, "name");
      let s_books = property_get(section, "books");
      let buttons_div = app_shared_container_blue_medium_titled(
        sections_holder,
        s_name,
      );
      function render_book(book) {
        let text = property_get(book, "text");
        async function on_click() {
          await on_open(book);
        }
        let button = app_shared_button(buttons_div, text, on_click);
        ("mark the book you are currently reading so the picker shows your place");
        let is_current = property_equals(book, "book_code", current_book_code);
        app_shared_button_toggle_style(is_current, button);
        list_add(all_buttons, button);
      }
      each(s_books, render_book);
    }
    each(divisions, render_section);
  }
  each(testaments, render_testament);
  app_bible_picker_buttons_enlarge(all_buttons);
}
