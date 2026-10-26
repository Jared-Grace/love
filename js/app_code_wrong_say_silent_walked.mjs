import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { null_is } from "./null_is.mjs";
import { app_code_lesson_quiz_multiple_choice_next_get } from "./app_code_lesson_quiz_multiple_choice_next_get.mjs";
import { app_code_lesson_quiz_multiple_choice_answered } from "./app_code_lesson_quiz_multiple_choice_answered.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function app_code_wrong_say_silent_walked() {
  arguments_assert(arguments, 0);
  ("every code lesson whose pick-the-output quizzes never say anything when a wrong answer is picked, and how many of those quizzes were asked to find out");
  ("A quiz is asked as the learner meets it, through the same choosing of question and buttons, and every wrong button on it is pressed; the lesson is silent when no press on any of its quizzes, over two rounds of its questions, is answered with a reminder. Not picked: silent on any one quiz, since a reminder that speaks to some wrong picks and not others is the intended shape, and the questions are drawn at random, so a per-quiz count would move between runs with nothing changed. Not picked: the backwards quizzes, which pick the code for an output and have no shared reminder yet - a ratchet over them would hold almost every lesson");
  let walked = 0;
  let offenders = [];
  for (let fn of app_code_lessons_fns()) {
    let lesson = fn();
    let asked = 0;
    let said = 0;
    for (let pass = 0; less_than(pass, 2); pass++) {
      let batch = property_get(lesson, "batch");
      for (let qa of batch()) {
        let exercises = property_get(qa, "exercises");
        for (let ex of exercises) {
          let info = property_get_or(ex, "info", {});
          let on_answer = property_get_or(info, "on_answer", null);
          let b = equal(on_answer, app_code_lesson_quiz_multiple_choice);
          if (not(b)) {
            continue;
          }
          let answer_property = property_get(info, "answer_property");
          if (equal(answer_property, "question")) {
            continue;
          }
          asked = asked + 1;
          walked = walked + 1;
          let wrong_say = property_get_or(info, "wrong_say", null);
          if (null_is(wrong_say)) {
            continue;
          }
          let batch_get = property_get(ex, "batch_get");
          let r = app_code_lesson_quiz_multiple_choice_next_get(
            info,
            ex,
            batch_get,
          );
          let distractor_count = property_get(r, "distractor_count");
          let next_get = property_get(r, "next_get");
          let r2 = app_code_lesson_quiz_multiple_choice_answered(
            r,
            distractor_count,
            next_get,
          );
          let object = property_get(r, "r3");
          let question = property_get(object, "quiz_question_text");
          let answer = property_get(r, "quiz_answer_text");
          for (let choice of property_get(r2, "choices")) {
            if (equal(choice, answer)) {
              continue;
            }
            let parts = wrong_say(question, answer, choice);
            if (null_not_is(parts)) {
              said = said + 1;
            }
          }
        }
      }
    }
    let b2 = equal(asked, 0);
    let silent = not(b2) && equal(said, 0);
    if (silent) {
      list_add(offenders, fn.name);
    }
  }
  list_sort_text(offenders);
  let r3 = {
    walked,
    offenders,
  };
  return r3;
}
