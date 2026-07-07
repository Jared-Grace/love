import { app_code_style_normal_text } from "../../../love/public/src/app_code_style_normal_text.mjs";
import { app_code_quiz_backwards_label_answer_validity } from "../../../love/public/src/app_code_quiz_backwards_label_answer_validity.mjs";
import { app_code_lesson_symbols_counting_quiz_backwards_on_button } from "../../../love/public/src/app_code_lesson_symbols_counting_quiz_backwards_on_button.mjs";
import { app_code_label_code_question } from "../../../love/public/src/app_code_label_code_question.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { app_code_lesson_base_quizzes_forwards_backwards } from "../../../love/public/src/app_code_lesson_base_quizzes_forwards_backwards.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_symbols_eval_valid_identifier } from "../../../love/public/src/app_code_symbols_eval_valid_identifier.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export function app_code_lesson_identifiers_valid(
  name,
  id,
  above,
  batch_get,
  on_question,
) {
  arguments_assert(arguments, 5);
  const example_label = "Is this a valid identifier? ";
  const quiz_label = example_label;
  let question_label = app_code_label_code_question();
  let batch_get2 = app_code_batch_question_answer_fns(
    batch_get,
    app_code_symbols_eval_valid_identifier,
  );
  let example_count = 2;
  let quiz_backwards_label_answer =
    app_code_quiz_backwards_label_answer_validity();
  let quiz_backwards_answer_count_override = 2;
  let on_quiz_answer_button_backwards =
    app_code_lesson_symbols_counting_quiz_backwards_on_button(on_question);
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    on_question,
    question_label,
    batch_get2,
    quiz_backwards_label_answer,
    on_quiz_answer_button_backwards,
    quiz_backwards_answer_count_override,
    "Validity: ",
    app_code_style_normal_text,
  );
  let lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get2,
    on_question,
    example_label,
    quizzes,
    question_label,
  );
  return lesson;
}
