import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_centered } from "./html_div_centered.mjs";
import { g_verify_book_name } from "./g_verify_book_name.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_margin_em } from "./html_margin_em.mjs";
import { not_equal } from "./not_equal.mjs";
import { g_verify_chapter_url } from "./g_verify_chapter_url.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
import { equal } from "./equal.mjs";
import { app_shared_verse_selected_background_color } from "./app_shared_verse_selected_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_g_verify_home_book_row(
  book,
  cbar,
  chapter_code,
  book_chapters,
) {
  "One book's row in the chapter grid at the top of the verify screen: the book's name in small faded type, then a button for every chapter of it that has a sermon written, with the one being looked at filled in so the eye finds where it is. Clicking any other chapter walks the whole page over to it.";
  arguments_assert(arguments, 4);
  let row = html_div_centered(cbar);
  let text = g_verify_book_name(book);
  let book_label = html_p_text(row, text);
  app_shared_text_deemphasized(book_label);
  let value = app_shared_font_size_label();
  html_style_font_size(book_label, value);
  html_margin_em(book_label, "0");
  function lambda4(code) {
    let v = code.slice(3);
    let v5 = Number(v);
    let r = String(v5);
    return r;
  }
  function lambda5(code) {
    if (not_equal(code, chapter_code)) {
      location.href = g_verify_chapter_url(location.pathname, code);
    }
  }
  let buttons = app_shared_button_list_centered(
    row,
    book_chapters[book],
    lambda4,
    lambda5,
  );
  function lambda6(code, i) {
    if (equal(code, chapter_code)) {
      let background = app_shared_verse_selected_background_color();
      html_style_background_color_set(buttons[i], background);
    }
  }
  book_chapters[book].forEach(lambda6);
}
