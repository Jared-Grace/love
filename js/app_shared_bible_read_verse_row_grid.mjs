import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_display_grid } from "./html_display_grid.mjs";
import { app_shared_bible_verse_number_gutter } from "./app_shared_bible_verse_number_gutter.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_rtl_is } from "./text_rtl_is.mjs";
export function app_shared_bible_read_verse_row_grid(content, v) {
  arguments_assert(arguments, 2);
  let p = html_p(content);
  html_display_grid(p);
  let left = app_shared_bible_verse_number_gutter();
  let columns = text_combine(left, " 1fr");
  html_style_set(p, "grid-template-columns", columns);
  let style_value = app_shared_spaced_small_gap();
  html_style_set(p, "column-gap", style_value);
  ("when the primary (spine) language reads right-to-left, mirror the whole verse row: direction rtl moves the number gutter to the right and flows the row right-to-left, matching the verse text's own detected direction, so an RTL reader gets RTL numbers too");
  let primary_text = property_get_or(v, "text", "");
  let row_rtl = text_rtl_is(primary_text);
  if (row_rtl) {
    html_style_set(p, "direction", "rtl");
  }
  return p;
}
