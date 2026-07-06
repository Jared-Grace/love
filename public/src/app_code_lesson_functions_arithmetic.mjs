import { app_code_lesson_symbols_digits_numbered_on_symbol } from "../../../love/public/src/app_code_lesson_symbols_digits_numbered_on_symbol.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
export function app_code_lesson_functions_arithmetic() {
  let r5 = app_code_lesson_symbols_counting(
    "Functions (Arithmetic)",
    "functions_arithmetic",
    above,
    app_code_lesson_symbols_digits_numbered_on_symbol,
    app_code_lesson_symbols_batch_digits,
  );
  return r5;
  function above(root) {
    let c = app_code_container_light_blue(root);
    let p = html_div(c);
  }
}
