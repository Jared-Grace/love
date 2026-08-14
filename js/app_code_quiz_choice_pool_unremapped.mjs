import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_quiz_choice_pool_unremapped(rounds) {
  "Every multiple choice in the course that shows the learner one pair and then fills its wrong answers from another - each one named with the lesson that asks it.";
  "A multiple choice draws its wrong answers from the lesson's other questions and reads them off by property name. That is sound for as long as what the quiz shows IS the pair its batch spells, which is how nearly every lesson works: a lesson asking the other way round switches which of the two property names is the answer, and both names still mean what they meant. A lesson that works a third value out of the pair and asks about THAT breaks the arrangement silently - the buttons fill with the wrong kind of thing, and one of them can be the very line the question is asking about, so the learner is told they were wrong for picking the line they were shown.";
  "Such a lesson is meant to hand over an info.qa_for that remaps a drawn line the same way it remapped its own, so a quiz carrying one is not reported. What is reported is the pair disagreeing with no remap given, which is the case nobody would notice.";
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
          let choice = equal(on_answer, app_code_lesson_quiz_multiple_choice);
          if (not(choice)) {
            continue;
          }
          let qa_for = property_get_or(info, "qa_for", null);
          let remapped = null_not_is(qa_for);
          if (remapped) {
            continue;
          }
          let answer_property = property_get(info, "answer_property");
          let question_property =
            app_code_lesson_quiz_qa_property_other(answer_property);
          let shows_answer = property_text_to(exercise, answer_property);
          let draws_answer = property_text_to(qa, answer_property);
          let shows_question = property_text_to(exercise, question_property);
          let draws_question = property_text_to(qa, question_property);
          let answer_agrees = equal(shows_answer, draws_answer);
          let question_agrees = equal(shows_question, draws_question);
          if (answer_agrees) {
            if (question_agrees) {
              continue;
            }
          }
          let answer_label = property_get_or(info, "answer_label", "");
          let key = text_combine_multiple([fn.name, " ", answer_label]);
          let already = list_includes(seen, key);
          if (already) {
            continue;
          }
          list_add(seen, key);
          list_add(found, {
            lesson: fn.name,
            answer_label,
            shows_question,
            shows_answer,
            draws_question,
            draws_answer,
          });
        }
      }
    }
  }
  return found;
}
