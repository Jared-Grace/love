import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_category_statements } from "./app_code_category_statements.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_statement_title_name_id_paint(
  words,
  paint_code,
) {
  arguments_assert(arguments, 2);
  ("a home title for a Statements lesson whose line is DRAWN rather than spelled: what the lesson is about in words, and then whatever paint_code puts on the row");
  ("The same title as the one that takes the line as a string, and that one is written on top of this. What is different is only where the line comes from: a string can only ever be one colour, and a line with a gap painted into it needs its pieces to be spans of their own.");
  ("It exists because the home list is the other place the course shows a shape with the parts left out, and the card inside the lesson that shows the same shape paints the gap grey. A title that could not paint would have said the gap in white, which is the one thing the grey is there to deny.");
  let spaced = text_combine(words, " ");
  function paint(parent) {
    html_span_text(parent, spaced);
    paint_code(parent);
  }
  let left = app_code_category_statements();
  let built = app_code_lesson_name_id_category_then(left, paint);
  return built;
}
