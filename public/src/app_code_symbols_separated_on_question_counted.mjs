import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { app_code_symbols_separated_on_question_generic } from "../../../love/public/src/app_code_symbols_separated_on_question_generic.mjs";
export function app_code_symbols_separated_on_question_counted(
  parent,
  symbols,
) {
  let r = app_code_symbols_separated_on_question_generic(
    parent,
    symbols,
    app_code_lesson_symbols_digits_numbered_on_symbol,
  );
  return r;
}
