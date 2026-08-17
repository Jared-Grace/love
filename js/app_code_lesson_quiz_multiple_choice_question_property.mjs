import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_quiz_question_text } from "./app_code_lesson_quiz_multiple_choice_quiz_question_text.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_multiple_choice_question_property(
  info,
  qa,
  batch_get,
) {
  arguments_assert(arguments, 3);
  let r2 = app_code_lesson_quiz_multiple_choice_quiz_question_text(
    info,
    qa,
    batch_get,
  );
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let answer_count_max = property_get(r2, "answer_count_max");
  let next_get = property_get(r2, "next_get");
  let distractor_count = property_get(r2, "distractor_count");
  let seen = property_get(r2, "seen");
  let distractors = property_get(r2, "distractors");
  let answer_property = property_get(r2, "answer_property");
  let r = property_get(r2, "r");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let question_property = property_get(r, "question_property");
  let r3 = {
    quiz_question_text,
    answer_count_max,
    next_get,
    distractor_count,
    seen,
    distractors,
    answer_property,
    quiz_answer_text,
    question_property,
  };
  return r3;
}
