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
  "a decimal number as one code tile: the whole part, the point, and the first fraction digit stay together (2.4) so the number reads as itself, then every LATER fraction digit is set apart by a space (2.4 9 9) so the trailing digits read one at a time. When chip_color is given, the FIRST digit after the point is a lifted colour chip in that colour (the shared number-highlight) so it is called out; chip_color null means every digit is a plain code digit";
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, whole_text);
  html_span_text(tile, ".");
  let fraction_digits = text_split_empty(fraction_text);
  function render_digit(d, index) {
    "the first fraction digit hugs the decimal point (no leading space) so 2.4 reads as one number; every later digit is set apart by a space; the first digit becomes a lifted colour chip when a colour was given, otherwise a plain code digit like the rest";
    let first = equal_0(index);
    if (first) {
      if (chip_color) {
        let chip = app_code_lesson_number_chip(tile, d, chip_color);
        app_code_lesson_chip_lift(chip);
        return;
      }
      html_span_text(tile, d);
      return;
    }
    html_span_text(tile, " ");
    html_span_text(tile, d);
  }
  each_index(fraction_digits, render_digit);
  return tile;
}
