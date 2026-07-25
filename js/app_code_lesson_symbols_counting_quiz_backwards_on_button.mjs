import { html_style_set } from "./html_style_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
export function app_code_lesson_symbols_counting_quiz_backwards_on_button(
  on_question,
) {
  let r = function lambda(parent, text) {
    "render the symbols into an inner div, not the button itself: a global button rule forces display block on the button element, which overrides the symbol row display flex and would stack the symbols vertically; an inner div is not a button, so it keeps the symbols in a horizontal centered row";
    html_clear(parent);
    let inner = html_div(parent);
    html_style_set(inner, "justify-content", "center");
    on_question(inner, text);
  };
  return r;
}
