import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
export function app_code_lesson_symbols_counting_quiz_backwards_on_button(
  on_question,
) {
  let r = function lambda(parent, text) {
    html_clear(parent);
    html_style_assign(parent, {
      "justify-content": "center",
    });
    on_question(parent, text);
  };
  return r;
}
