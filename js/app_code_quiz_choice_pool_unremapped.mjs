import { app_code_lessons_exercises_each } from "./app_code_lessons_exercises_each.mjs";
import { app_code_quiz_choice_pool_exercise_unremapped } from "./app_code_quiz_choice_pool_exercise_unremapped.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { null_is } from "./null_is.mjs";
import { object_copy_assign } from "./object_copy_assign.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_quiz_choice_pool_unremapped(rounds) {
  "Every multiple choice in the course that shows the learner one pair and then fills its wrong answers from another - each one named with the lesson that asks it.";
  "A multiple choice draws its wrong answers from the lesson's other questions and reads them off by property name. That is sound for as long as what the quiz shows IS the pair its batch spells, which is how nearly every lesson works: a lesson asking the other way round switches which of the two property names is the answer, and both names still mean what they meant. A lesson that works a third value out of the pair and asks about THAT breaks the arrangement silently - the buttons fill with the wrong kind of thing, and one of them can be the very line the question is asking about, so the learner is told they were wrong for picking the line they were shown.";
  "Each lesson is asked several rounds' worth because a lesson varies what it asks, and a quiz is reported once under the label it wears however many times it comes up.";
  let seen = [];
  let found = [];
  function on_exercise(exercise_visit) {
    let qa = property_get(exercise_visit, "qa");
    let exercise = property_get(exercise_visit, "exercise");
    let said = app_code_quiz_choice_pool_exercise_unremapped(qa, exercise);
    let agrees = null_is(said);
    if (agrees) {
      return;
    }
    let lesson = property_get(exercise_visit, "lesson");
    let answer_label = property_get(said, "answer_label");
    let key = text_combine_multiple([lesson, " ", answer_label]);
    let already = list_includes(seen, key);
    if (already) {
      return;
    }
    list_add(seen, key);
    let entry = object_copy_assign(said, {
      lesson,
    });
    list_add(found, entry);
  }
  app_code_lessons_exercises_each(rounds, on_exercise);
  return found;
}
