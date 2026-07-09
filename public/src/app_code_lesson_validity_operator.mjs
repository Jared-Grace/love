import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_lesson_validity_base } from "../../../love/public/src/app_code_lesson_validity_base.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
export function app_code_lesson_validity_operator(math_name, batch, above) {
  let name = "Operators " + text_wrap_parenthesis(math_name);
  let id = "operators_" + math_name;
  const example_answer_label = app_code_label_code_example();
  let lesson = app_code_lesson_validity_base(
    batch,
    id,
    name,
    above,
    "Code validity: ",
    html_text_set_code_dark,
    example_answer_label,
    html_text_set_code_dark,
  );
  return lesson;
}
