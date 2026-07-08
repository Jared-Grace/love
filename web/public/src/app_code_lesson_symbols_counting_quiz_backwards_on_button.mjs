import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
export function app_code_lesson_symbols_counting_quiz_backwards_on_button(
  on_question,
) {
  let r = function lambda(parent, text) {
    html_style_assign(parent, {
      "justify-content": "center",
    });
    on_question(parent, text);
  };
  return r;
}
