import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { app_code_lesson_chip_lift } from "./app_code_lesson_chip_lift.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
export function app_code_first_decimal_digit_line(
  parent,
  lead,
  decimal_before,
  digit,
  decimal_after,
  color,
) {
  "one worked line naming the first digit after the decimal point, highlighting that digit as a colour CHIP - the SAME shared number-highlight the remainder, exponent and multiply lessons use to colour a number by its role - in TWO places so the eye links them. Inside the number the chip is LIFTED off the black code tile and set apart with a space on each side (2. 4 999) so the called-out digit reads clearly. The standalone digit at the end of the sentence is a number by itself, so it gets NO black tile - just the bare chip on the light background. Each different first digit gets its OWN colour so the reader sees they are distinct digits, both in the same rounding group. lead is the sentence opener (For example, in / in); decimal_before is the number up to and including the point (like 7.); decimal_after is whatever follows the highlighted digit (like 5 or 999)";
  let div = html_div(parent);
  html_span_text(div, lead);
  let tile = html_span(div);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, decimal_before);
  html_span_text(tile, " ");
  let embedded = app_code_lesson_number_chip(tile, digit, color);
  app_code_lesson_chip_lift(embedded);
  html_span_text(tile, " ");
  html_span_text(tile, decimal_after);
  html_span_text(div, " the first digit after the decimal point is ");
  app_code_lesson_number_chip(div, digit, color);
  return div;
}
