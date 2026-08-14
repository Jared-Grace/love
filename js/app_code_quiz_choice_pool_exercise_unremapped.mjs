import { app_code_exercise_on_answer_is } from "./app_code_exercise_on_answer_is.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { property_text_to } from "./property_text_to.mjs";
export function app_code_quiz_choice_pool_exercise_unremapped(qa, exercise) {
  "What one exercise has to say about where its wrong answers will come from: a record of the disagreement when the pair it shows the learner is not the pair the batch line it was built from spells, and nothing at all when the two agree.";
  "Nothing is said about an exercise that is not a multiple choice, because only a multiple choice draws on the rest of the batch, and nothing is said about one carrying an info.qa_for either, because that is the lesson saying how a drawn line is to be remapped.";
  let choice = app_code_exercise_on_answer_is(
    exercise,
    app_code_lesson_quiz_multiple_choice,
  );
  if (not(choice)) {
    return null;
  }
  let info = property_get(exercise, "info");
  let qa_for = property_get_or(info, "qa_for", null);
  let remapped = null_not_is(qa_for);
  if (remapped) {
    return null;
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
      return null;
    }
  }
  let answer_label = property_get_or(info, "answer_label", "");
  let r = {
    answer_label,
    shows_question,
    shows_answer,
    draws_question,
    draws_answer,
  };
  return r;
}
