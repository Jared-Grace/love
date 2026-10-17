import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_group_parts_at } from "./app_code_lesson_group_parts_at.mjs";
import { null_is } from "./null_is.mjs";
import { html_span } from "./html_span.mjs";
import { app_shared_text_category } from "./app_shared_text_category.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
export function app_code_lesson_group_category_paint(parent, lesson_index) {
  arguments_assert(arguments, 2);
  ("the name of the group the lesson at lesson_index sits under on the home list, with a colon, styled the way a lesson's category word always was, into parent - the lesson heading's Branching: if where every if lesson used to say Statements");
  ("Asked for by the human 2026-10-18: the group is named instead of the category, and the home list, which already shows the group as the card a row sits in, shows neither.");
  let parts = app_code_lesson_group_parts_at(lesson_index);
  if (null_is(parts)) {
    return;
  }
  let span = html_span(parent);
  app_shared_text_category(span);
  html_cycle_code(span, parts);
  html_span_text(span, ":");
  html_span_space(parent);
}
