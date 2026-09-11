import { app_code_lesson_same_draw } from "./app_code_lesson_same_draw.mjs";
import { app_code_lesson_symbols_digits_numbered } from "./app_code_lesson_symbols_digits_numbered.mjs";
import { app_code_symbols_separated_on_question } from "./app_code_symbols_separated_on_question.mjs";
import { app_code_lesson_symbols_batch_digits } from "./app_code_lesson_symbols_batch_digits.mjs";
import { app_code_lesson_symbols_counting } from "./app_code_lesson_symbols_counting.mjs";
import { app_code_lesson_name_id } from "./app_code_lesson_name_id.mjs";
export function app_code_lesson_symbols_digits() {
  "It used to say the previous lesson. The lesson it repeats is the first one of the course, and a lesson about the digits inside a number was put between the two, so the screen a learner had just left was not the one being pointed at. It is the one screen of the five where the words came out wrong. Repaired by naming that lesson on 2026-09-10, and the naming taken back out on 2026-09-11 - the lesson is handed over as itself now and the words are worked out from where the two of them sit, so this cannot come apart again.";
  function lambda(root, context) {
    app_code_lesson_same_draw(
      root,
      context,
      app_code_lesson_symbols_digits,
      app_code_lesson_symbols_digits_numbered,
      "there are not numbers underneath",
    );
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
