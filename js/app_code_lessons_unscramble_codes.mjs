import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lessons_unscramble_codes(rounds) {
  "Every line the whole course can hand a learner to unscramble, each one named with the lesson that asks it, and each one listed once however often it comes up.";
  "Which lessons ask an unscramble is read off the lessons themselves - the exercise whose answer is handled by the token select - rather than from a list written here. A list would have to be kept in step with the lessons by hand, and a lesson added with a new shape of answer is exactly what a reader of this wants to hear about.";
  "The lines are generated rather than listed for the same reason, and each lesson is asked several rounds' worth, because a lesson varies what it asks and only some of what it can ask may be worth reporting.";
  let fns = app_code_lessons_fns();
  let seen = [];
  let found = [];
  for (let fn of fns) {
    let lesson = fn();
    let batch_get = property_get(lesson, "batch");
    for (let round = 0; less_than(round, rounds); round++) {
      let batch = batch_get();
      for (let qa of batch) {
        let exercises = property_get(qa, "exercises");
        for (let exercise of exercises) {
          let info = property_get(exercise, "info");
          let on_answer = property_get_or(info, "on_answer", null);
          let unscramble = equal(on_answer, app_code_lesson_quiz_token_select);
          if (not(unscramble)) {
            continue;
          }
          let answer_property = property_get(info, "answer_property");
          let code = property_get(exercise, answer_property);
          let key = text_combine_multiple([fn.name, " ", code]);
          let already = list_includes(seen, key);
          if (already) {
            continue;
          }
          list_add(seen, key);
          list_add(found, {
            lesson: fn.name,
            code,
          });
        }
      }
    }
  }
  return found;
}
