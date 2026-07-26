import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { app_code_lesson_chip_lift } from "./app_code_lesson_chip_lift.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { each_index } from "./each_index.mjs";
import { equal_0 } from "./equal_0.mjs";
export function app_code_decimal_spaced(
  parent,
  whole_text,
  fraction_text,
  chip_color,
) {
  "a decimal number as one code tile with every digit set apart by a space (2. 4 9 9 9) so the digits read one at a time. The whole part and the point stay together (2.), then each fraction digit is spaced. When chip_color is given, the FIRST digit after the point is a lifted colour chip in that colour (the shared number-highlight) so it is called out; chip_color null means every digit is a plain code digit";
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, whole_text);
  html_span_text(tile, ".");
  let fraction_digits = text_split_empty(fraction_text);
  function render_digit(d, index) {
    "each fraction digit preceded by a space; the first digit becomes a lifted colour chip when a colour was given, otherwise a plain code digit like the rest";
    html_span_text(tile, " ");
    let first = equal_0(index);
    if (first) {
      if (chip_color) {
        let chip = app_code_lesson_number_chip(tile, d, chip_color);
        app_code_lesson_chip_lift(chip);
        return;
      }
    }
    html_span_text(tile, d);
  }
  each_index(fraction_digits, render_digit);
  return tile;
}
