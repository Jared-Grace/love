import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_batch_question_answer_fns } from "../../../love/public/src/app_code_batch_question_answer_fns.mjs";
import { app_code_label_symbols } from "../../../love/public/src/app_code_label_symbols.mjs";
import { text_size } from "../../../love/public/src/text_size.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
export function app_code_lesson_symbols_counting(
  name,
  id,
  above,
  on_symbol,
  batch_symbols,
  on_question,
) {
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = text_size;
  let question_label = app_code_label_symbols();
  let batch_get = app_code_batch_question_answer_fns(
    batch_symbols,
    symbols_to_answer,
  );
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    batch_get,
    example_label,
    quiz_label,
    1,
    question_label,
    noop,
    on_question,
  );
  return r;
}
