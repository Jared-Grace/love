import { fn_name } from "./fn_name.mjs";
import { app_code_first_decimal_digit_words } from "./app_code_first_decimal_digit_words.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_first_decimal_digit_phrase(parent, color) {
  arguments_assert(arguments, 2);
  ("the phrase first digit after the decimal point, drawn in the colour of the digit the same line is pointing at");
  ("THE COLOUR IS THE CALLER'S, and the caller must be a line that also shows that digit in code. The colouring is there to connect the words to the code - the reader meets the phrase and the highlighted digit in one line, wearing one colour, and the words are read as naming that digit. A colour chosen here instead would be a fifth kind of marking on a screen that already colour-codes its numbers.");
  ("So this is NOT the way to write the phrase everywhere it appears. The screen says it five times, and the three that stand away from any code - the question at the top and the two rule lines - take ",
    fn_name("app_code_first_decimal_digit_words"),
    " as plain text. Colouring those too was tried and made the colour mean nothing: a mark on every occurrence points at none of them.");
  let words = app_code_first_decimal_digit_words();
  let span = html_span_text(parent, words);
  html_font_color_set(span, color);
  return span;
}
