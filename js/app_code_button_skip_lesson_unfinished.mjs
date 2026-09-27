import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_lesson_current_id } from "./app_code_lesson_current_id.mjs";
import { app_code_course_unfinished_next } from "./app_code_course_unfinished_next.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_course_unfinished_go } from "./app_code_course_unfinished_go.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_button_unfinished_text } from "./app_code_button_unfinished_text.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_button_skip_lesson_unfinished(context, parent) {
  arguments_assert(arguments, 2);
  ("A 'Skip to the next unfinished' button on a lesson's examples screen: it goes to the first thing further on that this learner has not finished, a lesson or a review, whichever comes first, and says which. Renders nothing (returns null) where there is no such thing.");
  ("DRAWN EVEN WHERE THE SKIP BUTTONS REACH THE SAME LESSON. It was hidden there once, and the human asked twice where it had gone (2026-09-25, 2026-09-26): a learner looks for this button by its words, so it must be where they look every time.");
  ("the search starts AT this lesson, which is named as the one being left, so the review standing straight after it is the first thing looked at");
  let number = app_code_lesson_current_number(context);
  let id = app_code_lesson_current_id(context);
  let index = subtract(number, 1);
  let way = app_code_course_unfinished_next(context, index, id);
  let none = null_is(way);
  if (none) {
    return null;
  }
  async function go() {
    await app_code_course_unfinished_go(context, way);
  }
  let kind = property_get(way, "kind");
  let text = app_code_button_unfinished_text(kind);
  let button = app_shared_button_wide_spaced(parent, text, go);
  return button;
}
