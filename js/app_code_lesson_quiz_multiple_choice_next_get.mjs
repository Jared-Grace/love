import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_question_property } from "./app_code_lesson_quiz_multiple_choice_question_property.mjs";
import { app_code_lesson_quiz_multiple_choice_qa_for } from "./app_code_lesson_quiz_multiple_choice_qa_for.mjs";
import { app_code_lesson_quiz_multiple_choice_attempts } from "./app_code_lesson_quiz_multiple_choice_attempts.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_multiple_choice_next_get(
  info,
  qa,
  batch_get,
) {
  arguments_assert(arguments, 3);
  let r = app_code_lesson_quiz_multiple_choice_question_property(
    info,
    qa,
    batch_get,
  );
  let r2 = app_code_lesson_quiz_multiple_choice_qa_for(r, info);
  let r3 = app_code_lesson_quiz_multiple_choice_attempts(r2);
  let attempts = property_get(r3, "attempts");
  let question_property = property_get(r3, "question_property");
  let quiz_answer_text = property_get(r3, "quiz_answer_text");
  let answer_property = property_get(r3, "answer_property");
  let distractors = property_get(r3, "distractors");
  let seen = property_get(r3, "seen");
  let distractor_count = property_get(r3, "distractor_count");
  let next_get = property_get(r3, "next_get");
  let r4 = {
    r3,
    attempts,
    question_property,
    quiz_answer_text,
    answer_property,
    distractors,
    seen,
    distractor_count,
    next_get,
  };
  return r4;
}
