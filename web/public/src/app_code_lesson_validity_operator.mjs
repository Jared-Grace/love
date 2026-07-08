import { app_code_label_code_example } from "../../../love/public/src/app_code_label_code_example.mjs";
import { html_text_set_code_dark } from "../../../love/public/src/html_text_set_code_dark.mjs";
import { app_code_lesson_validity_base } from "../../../love/public/src/app_code_lesson_validity_base.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
export function app_code_lesson_validity_operator(math_name, batch, above) {
  let inside = text_first_upper_to(math_name);
  let name = "Operators " + text_wrap_parenthesis(inside);
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
    backwards_answer_on_button,
  );
  return lesson;
}
