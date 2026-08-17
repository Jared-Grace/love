import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_decoy_fn } from "./app_code_lesson_quiz_multiple_choice_decoy_fn.mjs";
import { app_code_lesson_quiz_multiple_choice_has_decoys } from "./app_code_lesson_quiz_multiple_choice_has_decoys.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_multiple_choice_quiz_answer(
  info,
  qa,
  batch_get,
) {
  arguments_assert(arguments, 3);
  let r2 = app_code_lesson_quiz_multiple_choice_decoy_fn(info, qa, batch_get);
  let r3 = app_code_lesson_quiz_multiple_choice_has_decoys(r2);
  let has_decoys = property_get(r3, "has_decoys");
  let distractors = property_get(r3, "distractors");
  let seen = property_get(r3, "seen");
  let distractor_count = property_get(r3, "distractor_count");
  let next_get = property_get(r3, "next_get");
  let answer_count_max = property_get(r3, "answer_count_max");
  let quiz_question_text = property_get(r3, "quiz_question_text");
  let quiz_question = property_get(r3, "quiz_question");
  let question_property = property_get(r3, "question_property");
  let quiz_answer_text = property_get(r3, "quiz_answer_text");
  let quiz_answer = property_get(r3, "quiz_answer");
  let r = {
    r3,
    has_decoys,
    distractors,
    seen,
    distractor_count,
    next_get,
    answer_count_max,
    quiz_question_text,
    quiz_question,
    question_property,
    quiz_answer_text,
    quiz_answer,
  };
  return r;
}
