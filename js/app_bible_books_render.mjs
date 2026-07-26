import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_div } from "./html_div.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { not } from "./not.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { equal } from "./equal.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_bible_books_matches } from "./app_bible_books_matches.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
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
  let caret_open = "▾";
  let caret_closed = "▸";
  function render_testament(testament) {
    let t_name = property_get(testament, "name");
    let divisions = property_get(testament, "divisions");
    let t_card = app_shared_container_blue(list_div);
    ("tap the testament title to fold or unfold its sections, so a phone reader can collapse a whole testament and jump straight to the other one; the caret shows which way it is");
    let title_text = text_combine_multiple([caret_open, " ", t_name]);
    let title = html_div_text_bold(t_card, title_text);
    html_centered(title);
    html_cursor_pointer(title);
    let sections_holder = html_div(t_card);
    let collapsed = false;
    function toggle() {
      collapsed = not(collapsed);
      html_display_none_or_block(collapsed, sections_holder);
      let caret = collapsed ? caret_closed : caret_open;
      let text = text_combine_multiple([caret, " ", t_name]);
      html_text_set(title, text);
    }
    html_on_click(title, toggle);
    function render_section(section) {
      let s_name = property_get(section, "name");
      let s_books = property_get(section, "books");
      let s_card = app_shared_container_blue_medium(sections_holder);
      ("trim the section card's left-right padding so the book buttons get more of the row width; keep the card's vertical padding");
      let value = app_shared_spaced_tiny_gap();
      html_style_padding_x(s_card, value);
      let header = html_div_text_centered(s_card, s_name);
      ("color the section name in the deep blue of the nested cards, not gray, so the heading stays in the blue family");
      let color = app_shared_color_blue_dark();
      html_font_color_set(header, color);
      let buttons_div = html_div_centered(s_card);
      function render_book(book) {
        let text = property_get(book, "text");
        async function on_click() {
          await on_open(book);
        }
        let button = app_shared_button(buttons_div, text, on_click);
        ("mark the book you are currently reading so the picker shows your place");
        let book_code = property_get(book, "book_code");
        let is_current = equal(book_code, current_book_code);
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
