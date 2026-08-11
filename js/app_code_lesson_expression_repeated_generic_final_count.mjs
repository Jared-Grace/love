import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
export function app_code_lesson_expression_repeated_generic_final_count(
  grid,
  number,
  color,
) {
  arguments_assert(arguments, 3);
  ("the FINAL count as a coloured chip with white text - it IS the second number of the short form, so it echoes that chip and stands out clearly from the quiet running counts");
  let made = app_code_lesson_number_chip(grid, number, color);
  let size = app_shared_font_size_label();
  html_style_font_size(made, size);
  return made;
}
