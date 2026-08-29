import { app_code_lessons } from "./app_code_lessons.mjs";
import { list_index_of_property } from "./list_index_of_property.mjs";
import { add_1 } from "./add_1.mjs";
import { list_get_or_null } from "./list_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_incomplete_next } from "./app_code_lesson_incomplete_next.mjs";
import { app_code_lesson_first_id } from "./app_code_lesson_first_id.mjs";
import { storage_session_transform_context } from "./storage_session_transform_context.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
export async function app_code_lesson_next(context) {
  "advance from the lesson the learner is reading to THE LESSON STRAIGHT AFTER IT, and show its examples - the course walked in the order it was written.";
  "IT WENT LOOKING FOR AN UNFINISHED LESSON FIRST, and that is what this button is being asked to stop doing. A learner who had skipped ahead pressed Next at the end of a lesson and was carried off to an early lesson they had left open, with nothing on the page having said so - and the button they pressed was the one that says Next. Where the learner has work left elsewhere they are now OFFERED it, on a button of its own that says what it is, and Next goes where its own word promises.";
  "Where there is no lesson after this one it falls back to the next unfinished lesson anywhere in the course, wrapping round the top of the list. That is the one case where in order has no answer, and a learner standing at the bottom with blue rows above them is better sent to one of those than nowhere.";
  "Where there is neither, the lesson stays where it is. Nothing else is reachable, and the screens that draw this way on ask separately whether there is anywhere to go and put up the end-of-course note instead - so this is the answer for a press that should never have been offered rather than a destination.";
  function lesson_id_transform(value) {
    let lessons = app_code_lessons();
    let index = list_index_of_property(lessons, "id", value);
    let index_next = add_1(index);
    let in_order = list_get_or_null(lessons, index_next);
    let ended = null_is(in_order);
    if (not(ended)) {
      let id_in_order = property_get(in_order, "id");
      return id_in_order;
    }
    let lesson = app_code_lesson_incomplete_next(context, index_next, value);
    let none = null_is(lesson);
    if (none) {
      return value;
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
