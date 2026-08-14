import { app_code_exercise_on_answer_is } from "./app_code_exercise_on_answer_is.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lessons_exercises_each } from "./app_code_lessons_exercises_each.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_unscramble_codes(rounds) {
  "Every line the whole course can hand a learner to unscramble, each one named with the lesson that asks it, and each one listed once however often it comes up.";
  "Which lessons ask an unscramble is read off the lessons themselves - the exercise whose answer is handled by the token select - rather than from a list written here. A list would have to be kept in step with the lessons by hand, and a lesson added with a new shape of answer is exactly what a reader of this wants to hear about.";
  "The lines are generated rather than listed for the same reason, and each lesson is asked several rounds' worth, because a lesson varies what it asks and only some of what it can ask may be worth reporting.";
  let seen = [];
  let found = [];
  function on_exercise(visit) {
    let exercise = property_get(visit, "exercise");
    let unscramble = app_code_exercise_on_answer_is(
      exercise,
      app_code_lesson_quiz_token_select,
    );
    if (not(unscramble)) {
      return;
    }
    let lesson = property_get(visit, "lesson");
    let info = property_get(exercise, "info");
    let answer_property = property_get(info, "answer_property");
    let code = property_get(exercise, answer_property);
    let key = text_combine_multiple([lesson, " ", code]);
    let already = list_includes(seen, key);
    if (already) {
      return;
    }
    list_add(seen, key);
    list_add(found, {
      lesson,
      code,
    });
  }
  app_code_lessons_exercises_each(rounds, on_exercise);
  return found;
}
