import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
import { app_code_button_unfinished_text } from "./app_code_button_unfinished_text.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_button_skip_lesson_unfinished(context, parent) {
  arguments_assert(arguments, 2);
  ("A 'Next unfinished lesson' button on a lesson's examples screen: it goes to the first lesson further on that this learner has not finished, passing over every finished one and any review in between. Renders nothing (returns null) where there is no such lesson.");
  ("DRAWN EVEN WHERE THE SKIP BUTTONS REACH THE SAME LESSON. It was hidden there once, and the human asked twice where it had gone (2026-09-25, 2026-09-26): a learner looks for this button by its words, so it must be where they look every time.");
  let number = app_code_lesson_current_number(context);
  let id = app_code_lesson_current_id(context);
  let lesson = app_code_lesson_incomplete_next(context, number, id);
  let none = null_is(lesson);
  if (none) {
    return null;
  }
  async function go() {
    app_code_quiz_index_reset(context);
    await app_code_lesson_go(lesson, context);
  }
  let text = app_code_button_unfinished_text("lesson");
  let button = app_shared_button_wide_spaced(parent, text, go);
  return button;
}
