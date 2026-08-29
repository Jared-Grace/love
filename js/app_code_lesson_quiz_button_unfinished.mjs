import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_way_on_unfinished_try } from "./app_code_lesson_quiz_way_on_unfinished_try.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_index_set } from "./app_code_quiz_index_set.mjs";
import { app_code_hash_write } from "./app_code_hash_write.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_review_go_to_lesson } from "./app_code_review_go_to_lesson.mjs";
import { app_code_button_unfinished_text } from "./app_code_button_unfinished_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function app_code_lesson_quiz_button_unfinished(
  context,
  parent,
  quizzes,
  quiz_index,
  qli,
  refresh,
) {
  "$plain quiz_index";
  "$plain qli";
  "The button at the foot of a quiz offering the work this learner has left unfinished, drawn only where that is somewhere other than where the plain way on already leads, and saying which of the two it goes to. Renders nothing (returns null) where there is no such place.";
  "A quiz of this lesson is gone to by moving the quiz position and redrawing the quiz area, the same move the Next button makes; a lesson is gone to by starting that lesson at its first quiz, the same move finishing a lesson makes. Both are borrowed rather than written again here, so a change to how this app walks from one place to another reaches this button too.";
  arguments_assert(arguments, 6);
  let way = app_code_lesson_quiz_way_on_unfinished_try(
    context,
    quizzes,
    quiz_index,
    qli,
  );
  let none = null_is(way);
  if (none) {
    return null;
  }
  let kind = property_get(way, "kind");
  let index = property_get(way, "index");
  let lesson = property_get(way, "lesson");
  async function go() {
    let to_quiz = equal(kind, "quiz");
    if (to_quiz) {
      app_code_quiz_index_set(context, index);
      refresh();
      ("redrawing the quiz area on its own does not run the app-level after_refresh, so the new quiz position is written into the url from here - the same reason the Next button beside this one writes it");
      app_code_hash_write(context);
      return;
    }
    app_code_quiz_index_reset(context);
    await app_code_review_go_to_lesson(lesson, context);
  }
  let text = app_code_button_unfinished_text(kind);
  let button = app_shared_button_wide(parent, text, go);
  let value = app_shared_spaced_gap();
  html_style_margin_top(button, value);
  return button;
}
