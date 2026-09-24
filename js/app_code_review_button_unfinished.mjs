import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_go } from "./app_code_lesson_go.mjs";
import { app_code_button_unfinished_text } from "./app_code_button_unfinished_text.mjs";
import { app_shared_button_wide_spaced } from "./app_shared_button_wide_spaced.mjs";
export function app_code_review_button_unfinished(context, parent, number) {
  "$plain number";
  "The button at the end of a finished review offering the next lesson this learner has not finished, drawn only where that is somewhere other than the lesson straight after the review, which the continue button already goes to. Renders nothing (returns null) where there is no such lesson.";
  "IT LOOKS ONLY FURTHER ON, never round the top of the list, so the button that says next never carries a learner backwards. Early lessons left unfinished are reached from the home screen.";
  "The review stands in front of the lesson at its own 1-based number counted from zero, so that number is both where the search starts and where the continue button goes. No lesson is named as the one being left, because a review is not a lesson.";
  arguments_assert(arguments, 3);
  let lesson_none = null;
  let unfinished = app_code_lesson_incomplete_next(
    context,
    number,
    lesson_none,
  );
  let none = null_is(unfinished);
  if (none) {
    return null;
  }
  let lessons = app_code_lessons();
  let in_order = list_get_or_null(lessons, number);
  let id_in_order = property_get(in_order, "id");
  let id_unfinished = property_get(unfinished, "id");
  let same = equal(id_in_order, id_unfinished);
  if (same) {
    return null;
  }
  async function go() {
    await app_code_lesson_go(unfinished, context);
  }
  let text = app_code_button_unfinished_text("lesson");
  let button = app_shared_button_wide_spaced(parent, text, go);
  return button;
}
