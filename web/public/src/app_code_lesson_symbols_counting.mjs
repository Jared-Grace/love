import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
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
  let r = app_code_lesson_symbols_batches_generic(
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
