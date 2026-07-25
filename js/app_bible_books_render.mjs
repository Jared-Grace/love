import { html_clear } from "./html_clear.mjs";
import { app_bible_books_matches } from "./app_bible_books_matches.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { app_bible_picker_buttons_enlarge } from "./app_bible_picker_buttons_enlarge.mjs";
export function app_bible_books_render(list_div, query, books, on_open) {
  ("draw the Old-and-New-Testament to section to books tree as nested cards: a testament card holds a bold centered title and its section cards; each section card holds a deemphasized heading and its book buttons. every shown book is sized together at the end, so a narrow search of a few books gets big targets while the whole canon stays compact");
  html_clear(list_div);
  let testaments = app_bible_books_matches(query, books);
  let all_buttons = [];
  function render_testament(testament) {
    let t_name = property_get(testament, "name");
    let divisions = property_get(testament, "divisions");
    let t_card = app_shared_container_blue(list_div);
    let title = html_div_text_bold(t_card, t_name);
    html_centered(title);
    function render_section(section) {
      let s_name = property_get(section, "name");
      let s_books = property_get(section, "books");
      let s_card = app_shared_container(t_card);
      let header = html_div_text_centered(s_card, s_name);
      app_shared_text_deemphasized(header);
      let buttons_div = html_div_centered(s_card);
      function render_book(book) {
        let text = property_get(book, "text");
        async function on_click() {
          await on_open(book);
        }
        let button = app_shared_button(buttons_div, text, on_click);
        list_add(all_buttons, button);
      }
      each(s_books, render_book);
    }
    each(divisions, render_section);
  }
  each(testaments, render_testament);
  app_bible_picker_buttons_enlarge(all_buttons);
}
