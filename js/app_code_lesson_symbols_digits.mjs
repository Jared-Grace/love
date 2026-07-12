import { app_code_symbols_separated_on_question } from "./app_code_symbols_separated_on_question.mjs";
import { app_code_container_light_blue_text } from "./app_code_container_light_blue_text.mjs";
import { app_code_lesson_same_message } from "./app_code_lesson_same_message.mjs";
import { app_code_lesson_symbols_batch_digits } from "./app_code_lesson_symbols_batch_digits.mjs";
import { app_code_lesson_symbols_counting } from "./app_code_lesson_symbols_counting.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
export function app_code_lesson_symbols_digits() {
  function lambda(root) {
    let text = app_code_lesson_same_message("there are not numbers underneath");
    app_code_container_light_blue_text(root, text);
  }
  let name_id = app_code_lesson_name_id("symbols", ["digits"]);
  let r = app_code_lesson_symbols_counting(
    name_id,
    lambda,
    app_code_lesson_symbols_batch_digits,
    app_code_symbols_separated_on_question,
  );
  return r;
}
