import { text_size } from "../../../love/public/src/text_size.mjs";
import { app_code_lesson_symbols_batches_generic } from "../../../love/public/src/app_code_lesson_symbols_batches_generic.mjs";
export function app_code_lesson_symbols_counting(
  name,
  id,
  above,
  on_symbol,
  batch_symbols,
) {
  const example_label = "Number of symbols: ";
  const quiz_label = "How many symbols are there? ";
  let symbols_to_answer = text_size;
  let r = app_code_lesson_symbols_batches_generic(
    name,
    id,
    above,
    on_symbol,
    batch_symbols,
    example_label,
    quiz_label,
    symbols_to_answer,
    1,
    app_code_symbol,
  );
  return r;
}
