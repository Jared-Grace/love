import { app_code_lesson_symbols_batches_genric } from "../../../love/public/src/app_code_lesson_symbols_batches_genric.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function app_code_lesson_symbols_identifiers_valid(
  name,
  id,
  above,
  on_symbol,
  batch_symbols,
) {
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = list_size;
  let r = app_code_lesson_symbols_batches_genric(
    name,
    id,
    above,
    on_symbol,
    batch_symbols,
    example_label,
    quiz_label,
    symbols_to_answer,
  );
  return r;
}
