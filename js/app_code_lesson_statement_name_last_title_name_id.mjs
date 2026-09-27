import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { app_code_lesson_statement_title_code_paint_get } from "./app_code_lesson_statement_title_code_paint_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
export function app_code_lesson_statement_name_last_title_name_id(
  words,
  fragment,
) {
  arguments_assert(arguments, 2);
  ("the home title of a lesson that writes a name out only at the end: the lesson before's own piece of code, then the one writing-out beside it");
  ("The human asked for each title's code to be its own: five of these once all showed console.log(a); alone, which tells a learner nothing about which lesson it is. The piece of the lesson before makes it this lesson's, and the writing-out after it says the name is written out once, at the end.");
  ("The two are separate tiles side by side rather than one tile of two rows, at the human's request: a narrow screen moves the writing-out to the next row whole, and the piece is painted by the very same painter as the lesson before's title, so the two cannot come to look different.");
  let name = app_code_lesson_statement_name_value_name();
  let logged = js_code_console_log_statement(name);
  let log_paint = app_code_lesson_statement_title_code_paint_get(logged);
  function paint_code(parent) {
    fragment(parent);
    html_span_text(parent, " ");
    log_paint(parent);
  }
  let built = app_code_lesson_statement_title_name_id_paint(words, paint_code);
  return built;
}
