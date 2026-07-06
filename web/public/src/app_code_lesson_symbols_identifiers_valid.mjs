import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_symbols_eval_valid_identifier } from "../../../love/public/src/app_code_symbols_eval_valid_identifier.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { app_code_lesson_base_with_quizzes } from "../../../love/public/src/app_code_lesson_base_with_quizzes.mjs";
export function app_code_lesson_symbols_identifiers_valid(
  name,
  id,
  above,
  batch_get,
  on_question,
) {
  arguments_assert(arguments, 5);
  const example_label = "Is this a valid identifier? ";
  const quiz_label = example_label;
  let question_label = app_code_label_symbols();
  let batch_get2 = app_code_batch_question_answer_fns(
    batch_get,
    app_code_symbols_eval_valid_identifier,
  );
  let example_count = 2;
  let quiz_backwards_label_answer = null;
  let on_quiz_answer_button_backwards = null;
  let quiz_backwards_answer_count_override = null;
  const quizzes = app_code_lesson_base_quizzes_forwards_backwards(
    quiz_label,
    noop,
    on_question,
    question_label,
    batch_get2,
    quiz_backwards_label_answer,
    on_quiz_answer_button_backwards,
    quiz_backwards_answer_count_override,
  );
  let lesson = null;
  lesson = app_code_lesson_base(
    id,
    name,
    above,
    example_count,
    batch_get2,
    on_question,
    example_label,
    quizzes,
  );
  let r = lesson;
  return r;
}
