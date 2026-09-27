import { app_code_lesson_statement_title_code_dots_paint_get } from "./app_code_lesson_statement_title_code_dots_paint_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_title_name_id_paint } from "./app_code_lesson_statement_title_name_id_paint.mjs";
export function app_code_lesson_statement_title_name_id_dots(words, code) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson whose line has a value left out as three dots: the words, then the line in one code tile with the dots in the placeholder grey");
  ("The dots are a place to fill in, not three characters the line has, so they wear the grey the log title's gap wears. Asked for by the human. The line is handed in whole and split on the dots rather than rebuilt, so its two ends stay whatever the line builders wrote - three titles show such a line, and each builds it its own way.");
  let paint_code = app_code_lesson_statement_title_code_dots_paint_get(code);
  let built = app_code_lesson_statement_title_name_id_paint(words, paint_code);
  return built;
}
