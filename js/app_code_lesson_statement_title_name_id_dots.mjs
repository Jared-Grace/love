import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
export function app_code_lesson_statement_title_name_id_dots(words, code) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson whose line has a value left out as three dots: the words, then the line in one code tile with the dots in the placeholder grey");
  ("The dots are a place to fill in, not three characters the line has, so they wear the grey the log title's gap wears. Asked for by the human. The line is handed in whole and split on the dots rather than rebuilt, so its two ends stay whatever the line builders wrote - three titles show such a line, and each builds it its own way.");
  let dots = "...";
  let pieces = text_split(code, dots);
  let before = list_first(pieces);
  let after = list_last(pieces);
  function fill(host) {
    html_span_text(host, before);
    app_code_placeholder_dots(host);
    html_span_text(host, after);
  }
  function paint_code(parent) {
    let row = html_span(parent);
    html_style_white_space(row, "nowrap");
    app_code_code_tile(row, fill);
  }
  let built = app_code_lesson_statement_title_name_id_paint(words, paint_code);
  return built;
}
