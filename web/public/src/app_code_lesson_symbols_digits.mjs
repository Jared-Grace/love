import { app_code_symbols_separated_on_question } from "../../../love/public/src/app_code_symbols_separated_on_question.mjs";
import { app_code_container_light_blue_text } from "../../../love/public/src/app_code_container_light_blue_text.mjs";
import { app_code_lesson_same_message } from "../../../love/public/src/app_code_lesson_same_message.mjs";
import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_counting } from "../../../love/public/src/app_code_lesson_symbols_counting.mjs";
export function app_code_lesson_symbols_digits() {
  function lambda(root) {
    let text = app_code_lesson_same_message("there are not numbers underneath");
    app_code_container_light_blue_text(root, text);
  }
  let r5 = app_code_lesson_symbols_counting(
    "Symbols (Digits)",
    "symbols_digits",
    lambda,
    app_code_lesson_symbols_batch_digits,
    app_code_symbols_separated_on_question,
  );
  return r5;
}
