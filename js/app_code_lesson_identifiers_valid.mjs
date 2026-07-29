import { app_code_lesson_validity_base } from "./app_code_lesson_validity_base.mjs";
import { app_code_batch_question_answer_fns_validity_identifier } from "./app_code_batch_question_answer_fns_validity_identifier.mjs";
import { app_code_lesson_symbols_counting_quiz_backwards_on_button } from "./app_code_lesson_symbols_counting_quiz_backwards_on_button.mjs";
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
  let lesson = app_code_lesson_validity_base(
    batch_get2,
    name_id,
    above,
    backwards_question_label,
    on_question,
    example_answer_label,
    backwards_answer_on_button,
  );
  return lesson;
}
