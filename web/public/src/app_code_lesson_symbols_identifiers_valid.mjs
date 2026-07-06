import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_symbols_eval_valid_identifier } from "../../../love/public/src/app_code_symbols_eval_valid_identifier.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
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
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    batch_get2,
    example_label,
    quiz_label,
    2,
    question_label,
    noop,
    on_question,
  );
  return r;
}
