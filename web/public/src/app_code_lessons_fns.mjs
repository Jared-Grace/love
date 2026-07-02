import { app_code_lesson_symbols_letters_lower } from "../../../love/public/src/app_code_lesson_symbols_letters_lower.mjs";
import { app_code_lesson_symbols_digits } from "../../../love/public/src/app_code_lesson_symbols_digits.mjs";
import { app_code_lesson_symbols_digits_numbered } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered.mjs";
export function app_code_lessons_fns() {
  let r = [
    app_code_lesson_symbols_digits_numbered,
    app_code_lesson_symbols_digits,
    app_code_lesson_symbols_letters_lower,
  ];
  return r;
}
