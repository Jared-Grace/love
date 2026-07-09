import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_lesson_validity_base } from "../../../love/public/src/app_code_lesson_validity_base.mjs";
import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
export function app_code_lesson_validity_code(batch, name_id, above) {
  const example_answer_label = app_code_label_code_example();
  let lesson = app_code_lesson_validity_base(
    batch,
    name_id,
    above,
    "Code validity: ",
    html_text_set_code_dark,
    example_answer_label,
    html_text_set_code_dark,
  );
  return lesson;
}
