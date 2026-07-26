import { app_code_decimal_spaced } from "./app_code_decimal_spaced.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { text_combine } from "./text_combine.mjs";

export function app_code_first_decimal_digit_line(
  parent,
  lead,
  whole_text,
  digit,
  decimal_after,
  color,
) {
  "one worked line naming the first digit after the decimal point. The decimal is shown with its digits spaced apart (2. 4 9 9 9), the FIRST fraction digit called out as a lifted colour chip; that same digit is repeated as a bare chip at the end of the sentence so the eye links the two. Each different first digit gets its OWN colour so the reader sees they are distinct digits, both in the same rounding group. lead is the sentence opener (For example, in / in); whole_text is the whole part; digit is the highlighted first fraction digit; decimal_after is the rest of the fraction (like 5 or 999)";
  let div = html_div(parent);
  html_span_text(div, lead);
  let fraction = text_combine(digit, decimal_after);
  app_code_decimal_spaced(div, whole_text, fraction, color);
  html_span_text(div, " the first digit after the decimal point is ");
  app_code_lesson_number_chip(div, digit, color);
  return div;
}
