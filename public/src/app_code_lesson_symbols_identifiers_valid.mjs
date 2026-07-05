import { app_code_symbols_eval_valid_expression } from "../../../love/public/src/app_code_symbols_eval_valid_expression.mjs";
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
  let symbols_to_answer = function lambda(symbols) {
    let validity = app_code_symbols_eval_valid_expression(symbols);
    return validity;
  };
  let question_label = app_code_label_symbols();
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    on_symbol,
    batch_get,
    example_label,
    quiz_label,
    symbols_to_answer,
    2,
    symbol_create,
    question_label,
  );
  return r;
}
