import { app_code_lesson_identifiers_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_identifiers_underscores_define_symbol.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
export function app_code_lesson_symbols_digits_2() {
  function lambda(root) {
    app_code_lesson_identifiers_underscores_define_symbol(
      c,
      separator_valid_name,
      separator_valid,
    );
  }
  let r5 = app_code_lesson_symbols_counting(
    "Symbols (Digits)",
    "symbols_digits",
    lambda,
    noop,
    app_code_lesson_symbols_batch_digits,
  );
  return r5;
}
