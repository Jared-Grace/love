import { app_shared_spaced_neighbor_gap } from "./app_shared_spaced_neighbor_gap.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { app_code_lesson_chip_lift } from "./app_code_lesson_chip_lift.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
export function app_code_first_decimal_digit_line(
  parent,
  lead,
  whole_text,
  digit,
  decimal_after,
  color,
) {
  "one worked line naming the first digit after the decimal point. The number reads tight like a normal decimal (6.4999), with ONLY the first fraction digit called out as a lifted colour chip; that chip carries a small horizontal margin (tuned by eye) so its lift rings clear the point and the digits beside it without opening up a whole space. The same digit is repeated as a bare chip at the end of the sentence so the eye links the two. Each different first digit gets its OWN colour so the reader sees they are distinct digits, both in the same rounding group. lead is the sentence opener (For example, in / in); whole_text is the whole part; digit is the highlighted first fraction digit; decimal_after is the rest of the fraction (like 5 or 999)";
  let div = html_div(parent);
  html_span_text(div, lead);
  let tile = html_span(div);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, whole_text);
  html_span_text(tile, ".");
  let chip = app_code_lesson_number_chip(tile, digit, color);
  app_code_lesson_chip_lift(chip);
  html_style_margin_x(chip, app_shared_spaced_neighbor_gap());
  html_span_text(tile, decimal_after);
  html_span_text(div, " the first digit after the decimal point is ");
  app_code_lesson_number_chip(div, digit, color);
  return div;
}
