import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_string_value_of_is_say(line, word) {
  arguments_assert(arguments, 2);
  ('the tail of a sentence about what a string comes to: of "hello" is hello - the string written the way it is typed, then the same word again without its quotes');
  ("The words before it differ - one lesson says For example, another says Remember - and everything from the of onward is the same sentence saying the same thing about the same word, so the two lessons said it twice and either could have been changed alone.");
  ("The word wears the value colour on both sides of the is, so the eye follows one thing losing its quotes rather than reading two separate things. That pairing is the whole point of the line, and it is what a second copy would most easily get half-right.");
  html_span_text(line, " of ");
  app_code_string_colored(line, word);
  html_span_text(line, " is ");
  let value_out = html_span_text_code_dark(line, word);
  let color = app_code_string_value_color();
  html_font_color_set(value_out, color);
}
