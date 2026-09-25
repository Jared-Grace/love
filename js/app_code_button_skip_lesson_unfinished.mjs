import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_index_reset } from "./app_code_quiz_index_reset.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
import { app_code_button_unfinished_text } from "./app_code_button_unfinished_text.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_button_skip_lesson_unfinished(context, parent) {
  arguments_assert(arguments, 2);
  ("A 'Next unfinished lesson' button on a lesson's examples screen: it goes to the first lesson further on that this learner has not finished, passing over every finished one and any review in between. Renders nothing (returns null) where there is no such lesson.");
  ("DRAWN ONLY WHERE IT GOES SOMEWHERE THE SKIP BUTTONS DO NOT. The skip buttons beside it reach the lesson straight after this one, so where that lesson is the unfinished one this button would be a second door to the same room.");
  let number = app_code_lesson_current_number(context);
  let id = app_code_lesson_current_id(context);
  let lesson = app_code_lesson_incomplete_next(context, number, id);
  let none = null_is(lesson);
  if (none) {
    return null;
  }
  let lessons = app_code_lessons();
  ("the lesson straight after this one sits at the 1-based number of this one, counted from zero - and it exists, because an unfinished lesson was just found further on");
  let in_order = list_get(lessons, number);
  let id_unfinished = property_get(lesson, "id");
  let in_order_id = property_get(in_order, "id");
  let same = equal(in_order_id, id_unfinished);
  if (same) {
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
