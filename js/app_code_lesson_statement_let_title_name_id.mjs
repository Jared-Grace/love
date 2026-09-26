import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_string_any_code } from "./app_code_string_any_code.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
export function app_code_lesson_statement_let_title_name_id(words, name) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson whose line is the one that first gives a value a name, shown with the name it teaches and the value left as three dots");
  ("Two lessons show that line and differ only in what the name is - a letter in one, a whole word in the other - so the name is the one thing asked for here and everything else is the same both times.");
  let any = app_code_string_any_code();
  let code = js_code_let_statement(name, any);
  ("The dots between the quotes are grey, the same as the gap in the log title: they are a place to fill in, not three characters the line has. Asked for by the human. The line is split on the dots rather than rebuilt, so the two ends stay whatever the line builder writes.");
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
