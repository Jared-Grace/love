import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_multiple_choice_distractors } from "./app_code_lesson_quiz_multiple_choice_distractors.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or } from "./property_get_or.mjs";
export function app_code_lesson_quiz_multiple_choice_decoy_fn(
  info,
  qa,
  batch_get,
) {
  arguments_assert(arguments, 3);
  let r2 = app_code_lesson_quiz_multiple_choice_distractors(
    info,
    qa,
    batch_get,
  );
  let distractors = property_get(r2, "distractors");
  let seen = property_get(r2, "seen");
  let distractor_count = property_get(r2, "distractor_count");
  let next_get = property_get(r2, "next_get");
  let answer_count_max = property_get(r2, "answer_count_max");
  let quiz_question_text = property_get(r2, "quiz_question_text");
  let quiz_question = property_get(r2, "quiz_question");
  let question_property = property_get(r2, "question_property");
  let quiz_answer_text = property_get(r2, "quiz_answer_text");
  let quiz_answer = property_get(r2, "quiz_answer");
  let answer_property = property_get(r2, "answer_property");
  let decoy_fn = property_get_or(info, "decoys", null);
  let r = {
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
    answer_property,
    decoy_fn,
  };
  return r;
}
