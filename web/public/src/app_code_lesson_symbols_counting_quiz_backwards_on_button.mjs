import { html_style_background_color_black } from "../../../love/public/src/html_style_background_color_black.mjs";
import { html_style_padding_y_none } from "../../../love/public/src/html_style_padding_y_none.mjs";
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
    if (false) {
    }
    html_style_padding_y_none(parent);
    html_style_background_color_black(parent);
    on_question(parent, text);
  };
  return r;
}
