import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_quiz_qa_property_other } from "./app_code_lesson_quiz_qa_property_other.mjs";
import { app_code_answer_count_max } from "./app_code_answer_count_max.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_lesson_quiz_multiple_choice_distractors(
  info,
  qa,
  batch_get,
) {
  arguments_assert(arguments, 3);
  let answer_count_override = property_get(info, "answer_count_override");
  let answer_property = property_get(info, "answer_property");
  let quiz_answer = property_get(qa, answer_property);
  let quiz_answer_text = text_to(quiz_answer);
  let question_property =
    app_code_lesson_quiz_qa_property_other(answer_property);
  let quiz_question = property_get(qa, question_property);
  let quiz_question_text = text_to(quiz_question);
  let answer_count_max = app_code_answer_count_max();
  let nn2 = null_not_is(answer_count_override);
  if (nn2) {
    answer_count_max = answer_count_override;
  }
  let next_get = list_iterator_refillable(batch_get);
  let distractor_count = subtract(answer_count_max, 1);
  let seen = [quiz_answer_text];
  let distractors = [];
  return {
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
  };
}
