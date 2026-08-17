import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_quiz_multiple_choice_attempts_max(r) {
  arguments_assert(arguments, 1);
  let seen = property_get(r, "seen");
  let distractors = property_get(r, "distractors");
  let answer_property = property_get(r, "answer_property");
  let quiz_answer_text = property_get(r, "quiz_answer_text");
  let question_property = property_get(r, "question_property");
  let attempts = property_get(r, "attempts");
  let r3 = property_get(r, "r3");
  let answer_count_max = property_get(r3, "answer_count_max");
  let quiz_question_text = property_get(r3, "quiz_question_text");
  let qa_for = property_get(r3, "qa_for");
  let attempts_max = multiply(answer_count_max, 3);
  let r2 = {
    seen,
    distractors,
    answer_property,
    quiz_answer_text,
    question_property,
    attempts,
    quiz_question_text,
    qa_for,
    attempts_max,
  };
  return r2;
}
