import { app_code_lesson_identifiers_symbol_first } from "../../../love/public/src/app_code_lesson_identifiers_symbol_first.mjs";
import { app_code_lesson_identifiers_dollar_signs } from "../../../love/public/src/app_code_lesson_identifiers_dollar_signs.mjs";
import { app_code_lesson_identifiers_underscores } from "../../../love/public/src/app_code_lesson_identifiers_underscores.mjs";
import { app_code_lesson_identifiers_letters_spaces } from "../../../love/public/src/app_code_lesson_identifiers_letters_spaces.mjs";
import { app_code_lesson_symbols_space } from "../../../love/public/src/app_code_lesson_symbols_space.mjs";
import { app_code_lesson_symbols_letters } from "../../../love/public/src/app_code_lesson_symbols_letters.mjs";
import { app_code_lesson_symbols_digits } from "../../../love/public/src/app_code_lesson_symbols_digits.mjs";
import { app_code_lesson_symbols_digits_numbered } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered.mjs";
export function app_code_lessons_fns() {
  let r = [
    app_code_lesson_symbols_digits_numbered,
    app_code_lesson_symbols_digits,
    app_code_lesson_symbols_letters,
    app_code_lesson_symbols_space,
    app_code_lesson_identifiers_letters_spaces,
    app_code_lesson_identifiers_underscores,
    app_code_lesson_identifiers_dollar_signs,
    app_code_lesson_identifiers_symbol_first,
  ];
  return r;
}
