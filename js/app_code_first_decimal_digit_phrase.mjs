import { app_code_first_decimal_digit_words } from "./app_code_first_decimal_digit_words.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_first_decimal_digit_phrase(parent) {
  arguments_assert(arguments, 1);
  ("the phrase first digit after the decimal point, drawn in a colour so the eye finds it again");
  ("It is the thing the whole screen turns on, and the screen names it five times: once as the question at the top, twice while working out which digit it is, and twice more in the rule that reads it. Coloured, those five are one term a reader recognises at a glance; in plain black they are five sentences to read word by word.");
  ("THE COLOUR IS THE CHIP COLOURS' OWN - one of the four this app colour-codes numbers with - so the phrase reads as belonging with the digits it names rather than as a new kind of marking. Green, because the two digits highlighted on this screen are amber and blue and a phrase wearing either one would read as naming that digit in particular rather than the idea of the digit.");
  let color = app_code_lesson_chip_color(1);
  let words = app_code_first_decimal_digit_words();
  let span = html_span_text(parent, words);
  html_font_color_set(span, color);
  return span;
}
