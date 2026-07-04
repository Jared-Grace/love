import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_underscores_define_symbol } from "../../../love/public/src/app_code_lesson_underscores_define_symbol.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
export function app_code_lesson_symbols_digits_2() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    app_code_lesson_underscores_define_symbol(c, "plus sign", "+");
  }
  let r5 = app_code_lesson_symbols_counting(
    "Operators (Addition)",
    "operators_addition",
    lambda,
    noop,
    app_code_lesson_symbols_batch_digits,
  );
  return r5;
}
