import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { add_1 } from "./add_1.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { null_is } from "./null_is.mjs";
import { list_property_next_value } from "./list_property_next_value.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { storage_session_transform_context } from "./storage_session_transform_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
export async function app_code_lesson_next(context) {
  "advance from the current lesson to the next lesson the learner has not finished, and show its examples - a blue row on the home list, never a green one they have already been all the way through";
  "IT LOOKS PAST THE LESSON BEING LEFT rather than at it, so finishing a lesson never hands the learner straight back to the lesson they just finished.";
  "Where no lesson anywhere is unfinished it falls back to the lesson straight after this one, which is what this always did - a learner walking back through a course they have finished walks it in order.";
  function lesson_id_transform(value) {
    let lessons = app_code_lessons();
    let index = list_index_of_property(lessons, "id", value);
    let index_next = add_1(index);
    let lesson = app_code_lesson_incomplete_next(context, index_next);
    let none = null_is(lesson);
    if (none) {
      let value_next = list_property_next_value(lessons, "id", value);
      return value_next;
    }
    let id = property_get(lesson, "id");
    return id;
  }
  let value_initial = app_code_lesson_first_id();
  storage_session_transform_context(
    context,
    "lesson_id",
    value_initial,
    lesson_id_transform,
  );
  await app_shared_screen_set(context, app_code_examples);
}
