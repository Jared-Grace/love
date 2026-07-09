import { app_code_lesson_validity_base } from "../../../love/public/src/app_code_lesson_validity_base.mjs";
import { app_code_batch_question_answer_fns_validity_identifier } from "../../../love/public/src/app_code_batch_question_answer_fns_validity_identifier.mjs";
import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "../../../love/public/src/app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_lesson_symbols_counting_quiz_backwards_on_button } from "../../../love/public/src/app_code_lesson_symbols_counting_quiz_backwards_on_button.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_quizzes } from "../../../love/public/src/app_code_lesson_quizzes.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export function app_code_lesson_identifiers_valid(
  name,
  id,
  above,
  batch_get,
  on_question,
) {
  arguments_assert(arguments, 5);
  const backwards_question_label = "Is this a valid identifier? ";
  let lesson2 = app_code_lesson_validity_base(
    batch_get,
    id,
    name,
    above,
    backwards_question_label,
    on_question_forwards,
    example_answer_label,
    backwards_answer_on_button,
  );
  return lesson2;
  const quiz_label = backwards_question_label;
  let question_label = app_code_label_code_question();
  let batch_get2 =
    app_code_batch_question_answer_fns_validity_identifier(batch_get);
  let example_count = 2;
  let quiz_backwards_label_answer =
    app_code_quiz_backwards_label_answer_validity();
  let quiz_backwards_answer_count_override = 2;
  let backwards_answer_on_button =
    app_code_lesson_symbols_counting_quiz_backwards_on_button(on_question);
  const newLocal = "Identifier validity: ";
  const quizzes = app_code_lesson_quizzes(
    batch_get2,
    question_label,
    on_question,
    quiz_label,
    noop,
    newLocal,
    app_code_style_normal_text,
    quiz_backwards_label_answer,
    backwards_answer_on_button,
    quiz_backwards_answer_count_override,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get2,
    on_question,
    backwards_question_label,
    quizzes,
    question_label,
    app_code_style_normal_text,
  );
  return lesson;
}
