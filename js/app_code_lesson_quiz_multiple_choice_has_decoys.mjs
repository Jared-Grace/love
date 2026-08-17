import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function app_code_lesson_quiz_multiple_choice_has_decoys(r2) {
  arguments_assert(arguments, 1);
  let decoy_fn = property_get(r2, "decoy_fn");
  let answer_property = property_get(r2, "answer_property");
  let quiz_answer = property_get(r2, "quiz_answer");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let question_property = property_get(r2, "question_property");
  let quiz_question = property_get(r2, "quiz_question");
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let answer_count_max = property_get(r2, "answer_count_max");
  let next_get = property_get(r2, "next_get");
  let distractor_count = property_get(r2, "distractor_count");
  let seen = property_get(r2, "seen");
  let distractors = property_get(r2, "distractors");
  let has_decoys = null_not_is(decoy_fn);
  let r = {
    decoy_fn,
    answer_property,
    quiz_answer,
    quiz_answer_text,
    question_property,
    quiz_question,
    quiz_question_text,
    answer_count_max,
    next_get,
    distractor_count,
    seen,
    distractors,
    has_decoys,
  };
  return r;
}
