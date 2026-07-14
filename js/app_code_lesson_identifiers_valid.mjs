import { app_code_lesson_validity_base } from "./app_code_lesson_validity_base.mjs";
import { app_code_batch_question_answer_fns_validity_identifier } from "./app_code_batch_question_answer_fns_validity_identifier.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "./app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_lesson_symbols_counting_quiz_backwards_on_button } from "./app_code_lesson_symbols_counting_quiz_backwards_on_button.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes } from "./app_code_lesson_quizzes.mjs";
import { noop } from "./noop.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_identifiers_valid(
  name_id,
  above,
  batch_get,
  on_question,
) {
  arguments_assert(arguments, 4);
  let batch_get2 =
    app_code_batch_question_answer_fns_validity_identifier(batch_get);
  let backwards_question_label = "Identifier validity: ";
  let example_answer_label = "Is this a valid identifier? ";
  let backwards_answer_on_button =
    app_code_lesson_symbols_counting_quiz_backwards_on_button(on_question);
  let lesson2 = app_code_lesson_validity_base(
    batch_get2,
    name_id,
    above,
    backwards_question_label,
    on_question,
    example_answer_label,
    backwards_answer_on_button,
  );
  return lesson2;
  let quiz_label = example_answer_label;
  let example_question_label = app_code_label_code_question();
  let example_count = 2;
  let quiz_backwards_label_answer =
    app_code_quiz_backwards_label_answer_validity();
  let quiz_backwards_answer_count_override = 2;
  let forwards = {
    question_label: example_question_label,
    on_question,
    answer_label: quiz_label,
    answer_on_button: noop,
    answer_count_override: null,
  };
  let backwards = {
    question_label: backwards_question_label,
    on_question: app_code_style_normal_text,
    answer_label: quiz_backwards_label_answer,
    answer_on_button: backwards_answer_on_button,
    answer_count_override: quiz_backwards_answer_count_override,
  };
  let quizzes_get = app_code_lesson_quizzes({
    batch_get: batch_get2,
    forwards,
    backwards,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    example_count,
    batch_get2,
    on_question,
    backwards_question_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
