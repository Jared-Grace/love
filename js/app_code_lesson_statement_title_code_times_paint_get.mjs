import { html_span } from "./html_span.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_statement_title_code_times_paint_get(
  code,
  times,
) {
  arguments_assert(arguments, 2);
  ("what paints one piece of a home title's code said more than once: the code once, then how many times, as (x2)");
  ("Asked for by the human: the counting title once wrote its line out twice, one under the other, which made the title two rows of code. Written once with (x2) after it, the title stays one row and still says the line runs twice.");
  let tile_paint = app_code_lesson_statement_title_code_paint_get(code);
  let count = text_combine_multiple([" (x", times, ")"]);
  function paint_code(parent) {
    let row = html_span(parent);
    html_style_white_space(row, "nowrap");
    tile_paint(row);
    html_span_text(row, count);
  }
  return paint_code;
}
