import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { app_shared_bible_verse_number_gutter } from "./app_shared_bible_verse_number_gutter.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_align_items_center } from "./html_align_items_center.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
export function app_shared_bible_read_verse_row_grid(content, first_text) {
  arguments_assert(arguments, 2);
  let p = html_p(content);
  html_display_grid(p);
  let left = app_shared_bible_verse_number_gutter();
  let columns = text_combine(left, " 1fr");
  html_style_set(p, "grid-template-columns", columns);
  let style_value = app_shared_spaced_small_gap();
  html_style_set(p, "column-gap", style_value);
  ("the verse sits level with its number button: a one-line verse is shorter than the button, and left at the top of its row it read as hanging above the number. Rejected: lining up only the first line with the button - it keeps long verses starting at the top, but the human asked for the verse centered against its number.");
  html_align_items_center(p);
  ("when the first language shown reads right-to-left, mirror the whole verse row: direction rtl moves the number gutter to the right and flows the row right-to-left, so an RTL reader gets RTL numbers too. The FIRST rather than the spine (last-chosen) one, because the first is the line the number starts: English over Urdu with the number on the right left the number beside nothing it begins.");
  let row_rtl = text_rtl_is(first_text);
  if (row_rtl) {
    html_style_set(p, "direction", "rtl");
  }
  return p;
}
