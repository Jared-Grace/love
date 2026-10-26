import { app_code_label_code_example } from "./app_code_label_code_example.mjs";
import { app_code_lesson_validity_base } from "./app_code_lesson_validity_base.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_validity_wrong_say } from "./app_code_validity_wrong_say.mjs";
export function app_code_lesson_validity_code(batch, name_id, above) {
  let example_answer_label = app_code_label_code_example();
  let lesson = app_code_lesson_validity_base({
    batch_get: batch,
    name_id,
    above,
    backwards_question_label: "Code validity: ",
    on_question: html_text_set_code_dark,
    example_answer_label,
    backwards_answer_on_button: html_text_set_code_dark,
    wrong_say: app_code_validity_wrong_say,
  });
  return lesson;
}
