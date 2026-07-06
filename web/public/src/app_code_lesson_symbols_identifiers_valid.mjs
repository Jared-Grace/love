import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_symbols_eval_valid_identifier } from "../../../love/public/src/app_code_symbols_eval_valid_identifier.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
export function app_code_lesson_symbols_identifiers_valid(
  name,
  id,
  above,
  on_symbol,
  batch_get,
  symbol_create,
) {
  arguments_assert(arguments, 6);
  const example_label = "Is this a valid identifier? ";
  const quiz_label = example_label;
  let question_label = app_code_label_symbols();
  let batch_get2 = app_code_batch_question_answer_fns(batch_get);
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    on_symbol,
    batch_get2,
    example_label,
    quiz_label,
    app_code_symbols_eval_valid_identifier,
    2,
    symbol_create,
    question_label,
  );
  return r;
}
