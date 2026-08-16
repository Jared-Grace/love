import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_style_justify_self } from "./html_style_justify_self.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_verse_entries } from "./app_shared_bible_verse_entries.mjs";
import { app_shared_bible_verse_texts } from "./app_shared_bible_verse_texts.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
export function app_shared_bible_read_verse_row_cells(
  p,
  verse_number_v,
  select_persist,
  languages_verses,
  show_language_names,
) {
  arguments_assert(arguments, 5);
  let number = app_shared_button(p, verse_number_v, select_persist);
  ("each verse row is its own grid, so the number gutter is a fixed track and the button inside it used to size itself to its digits - a one-digit button came out narrower than a two-digit one. Stretching the button across the whole track is what makes every verse number button the same width, zero side padding keeps a three-digit number (Psalm 119) inside that width, and centering puts the digits in the middle of the button");
  html_style_justify_self(number, "stretch");
  html_style_padding_x(number, "0");
  html_centered(number);
  let text_cell = html_div(p);
  let entries = app_shared_bible_verse_entries(
    languages_verses,
    verse_number_v,
    show_language_names,
  );
  app_shared_bible_verse_texts(text_cell, entries);
  html_margin_0(p);
  ("a verse row's own inset, and the two directions are deliberately not the same number. Down the page the padding is a separation - it is what holds one verse apart from the next - so it keeps a gap the eye can read. Left and right it is an edge, sitting on top of the reading column's own edge gap and pushing the verse number away from the side of the screen twice over, which is the narrowest thing on a phone made narrower for nothing. The row above the first verse is the same padding worn against the chapter bar, so a smaller number closes that band too.");
  let value = app_shared_spaced_neighbor_gap();
  html_style_padding_y(p, value);
  let value2 = app_shared_spaced_frame_gap();
  html_style_padding_x(p, value2);
}
