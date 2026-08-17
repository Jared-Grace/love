import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_multiple_choice_attempts(r2) {
  arguments_assert(arguments, 1);
  let qa_for = property_get(r2, "qa_for");
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let answer_count_max = property_get(r2, "answer_count_max");
  let next_get = property_get(r2, "next_get");
  let distractor_count = property_get(r2, "distractor_count");
  let seen = property_get(r2, "seen");
  let distractors = property_get(r2, "distractors");
  let answer_property = property_get(r2, "answer_property");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let question_property = property_get(r2, "question_property");
  let attempts = 0;
  let r = {
    qa_for,
    quiz_question_text,
    answer_count_max,
    next_get,
    distractor_count,
    seen,
    distractors,
    answer_property,
    quiz_answer_text,
    question_property,
    attempts,
  };
  return r;
}
