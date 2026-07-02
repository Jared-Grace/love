import { text_upper_to } from "../../../love/public/src/text_upper_to.mjs";
import { app_code_lesson_symbols_letters_batch } from "../../../love/public/src/app_code_lesson_symbols_letters_batch.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters_upper() {
  function lambda(root) {
    return;
  }
  let batch_symbols = app_code_lesson_symbols_letters_batch(text_upper_to);
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters, Uppercase)",
    "symbols_letters_upper",
    lambda,
    noop,
    batch_symbols,
  );
  return r5;
}
