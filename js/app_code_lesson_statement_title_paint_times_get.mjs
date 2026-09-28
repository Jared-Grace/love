import { html_style_max_width } from "./html_style_max_width.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { html_span } from "./html_span.mjs";
import { html_display_set } from "./html_display_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flex_shrink_0 } from "./html_flex_shrink_0.mjs";
export function app_code_lesson_statement_title_paint_times_get(
  tile_paint,
  times,
) {
  arguments_assert(arguments, 2);
  ("what paints a home title's code tile, painted by tile_paint, and then how many times the line runs, as (x2)");
  ("The tile and the count sit in one row that is a flex row, so when the two do not fit it is the tile that gives way and wraps between its tokens while the count stays beside it. The row once refused to wrap instead, and on a phone with the text size turned up the count ran fifteen pixels past the screen - the browser then widened the page to fit and the bar held at the top slid out of sight, 2026-09-28. Letting the count drop to a row of its own was the other way out, turned down because a count alone on a row reads as belonging to nothing.");
  ("The space before the count does not break, because a flex row drops an ordinary space at the start of an item and the count would touch the tile.");
  let nb = text_space_nb();
  let count = text_combine_multiple([nb, "(x", times, ")"]);
  function paint_code(parent) {
    let row = html_span(parent);
    html_display_set(row, "inline-flex");
    html_style_set(row, "align-items", "baseline");
    html_style_max_width(row, "100%");
    tile_paint(row);
    let shown = html_span_text(row, count);
    html_flex_shrink_0(shown);
  }
  return paint_code;
}
