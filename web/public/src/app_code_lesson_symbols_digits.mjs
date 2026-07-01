import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_digits() {
  function lambda() {}
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Digits)",
    "symbols_digits",
    lambda,
    noop,
  );
  return r5;
}
