import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
export function app_code_lesson_symbols_digits() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div_text(
      c,
      "This lesson is the same as the previous lesson, except there are not numbers underneath",
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
