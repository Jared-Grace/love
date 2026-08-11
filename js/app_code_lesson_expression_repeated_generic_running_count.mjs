import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { html_span_text_smaller } from "./html_span_text_smaller.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_code_lesson_expression_repeated_generic_running_count(
  grid,
  number,
) {
  arguments_assert(arguments, 2);
  ("the count under an intermediate repeat - bold and dark so the counting reads clearly; it does not compete with the final count, which stands apart by its coloured chip rather than by weight");
  let text = text_to(number);
  let label = html_span_text_smaller(grid, text);
  html_font_color_set(label, "rgb(55, 55, 55)");
  html_bold(label);
  return label;
}
