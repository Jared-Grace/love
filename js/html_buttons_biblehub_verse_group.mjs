import { html_style_justify_self } from "./html_style_justify_self.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
import { html_style_gap } from "./html_style_gap.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { not } from "./not.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
export function html_buttons_biblehub_verse_group(
  parent,
  book_name,
  chapter_name,
  verse_list,
  label,
  folder,
  ending,
) {
  ("one biblehub link kind (commentary / parallel / interlinear) for a passage. SINGLE verse: one button captioned <label> appended to parent. MULTI-verse: parent is a shared two-column GRID (see ",
    fn_name("html_buttons_biblehub_verse_grid"),
    ") — appends a right-aligned <label>: cell and a left-aligned cell of one bare verse-number button per verse, so the verse numbers of all three link-kinds line up in a column");
  let multi = greater_than_equal(verse_list.length, 2);
  if (not(multi)) {
    html_button_biblehub_open(
      parent,
      book_name,
      chapter_name,
      verse_list[0],
      label,
      folder,
      ending,
    );
    return;
  }
  let caption = html_span_text(parent, label + ":");
  app_shared_text_deemphasized(caption);
  html_style_justify_self(caption, "end");
  let buttons_cell = html_div(parent);
  html_display_flex(buttons_cell);
  let gap = app_shared_spaced_small_gap();
  html_style_gap(buttons_cell, gap);
  html_style_justify_self(buttons_cell, "start");
  function verse_button(verse_number) {
    html_button_biblehub_open(
      buttons_cell,
      book_name,
      chapter_name,
      verse_number,
      verse_number,
      folder,
      ending,
    );
  }
  verse_list.forEach(verse_button);
}
