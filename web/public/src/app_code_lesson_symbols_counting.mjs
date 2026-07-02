import { app_code_lesson_symbols_batches_genric } from "../../../love/public/src/app_code_lesson_symbols_batches_genric.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
export function app_code_lesson_symbols_counting(
  name,
  id,
  above,
  on_symbol,
  batch_symbols,
) {
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = list_size;
  let r3 = app_code_lesson_symbols_batches_genric(
    on_symbol,
    name,
    id,
    above,
    batch_symbols,
    symbols_to_answer,
    example_label,
    quiz_label,
  );
  return r3;
}
