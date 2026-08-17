import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_quiz_answer } from "./app_code_lesson_quiz_multiple_choice_quiz_answer.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_multiple_choice_tailored } from "./app_code_lesson_quiz_multiple_choice_tailored.mjs";
export function app_code_lesson_quiz_multiple_choice_quiz_question_text(
  info,
  qa,
  batch_get,
) {
  arguments_assert(arguments, 3);
  let r2 = app_code_lesson_quiz_multiple_choice_quiz_answer(
    info,
    qa,
    batch_get,
  );
  let quiz_answer = property_get(r2, "quiz_answer");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let r = app_code_lesson_quiz_multiple_choice_tailored(r2, quiz_answer);
  let answer_property = property_get(r, "answer_property");
  let distractors = property_get(r, "distractors");
  let seen = property_get(r, "seen");
  let distractor_count = property_get(r, "distractor_count");
  let next_get = property_get(r, "next_get");
  let answer_count_max = property_get(r, "answer_count_max");
  let quiz_question_text = property_get(r, "quiz_question_text");
  let r3 = {
    quiz_answer_text,
    r,
    answer_property,
    distractors,
    seen,
    distractor_count,
    next_get,
    answer_count_max,
    quiz_question_text,
  };
  return r3;
}
