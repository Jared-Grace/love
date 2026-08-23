import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_first_decimal_digit_line } from "./app_code_first_decimal_digit_line.mjs";
import { app_code_first_decimal_digit_phrase } from "./app_code_first_decimal_digit_phrase.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_round_nearest_digit_card(
  root,
  whole_text,
  color_low,
  color_high,
) {
  arguments_assert(arguments, 4);
  ("the first of the two questions this screen asks, with its answer under it: which digit is the first digit after the decimal point, shown on two numbers whose first digits differ");
  ("Nothing here rounds anything. The digit is found before it is put to work, because the screen used to name it for the first time three lines after two numbers had already been rounded by it.");
  ("The two digits are literal - 3 and 4 - while the whole part varies. Which digits they are is the card's own content rather than a thing to randomize: both must fall in the same rounding half for the second question to have something to say about them, and 3 beside 4 is the pair a reader can least confuse with the whole part standing to their left.");
  let card = app_code_container_light_blue(root);
  let asked = html_div(card);
  html_span_text(asked, "What's the ");
  app_code_first_decimal_digit_phrase(asked);
  html_span_text(asked, "?");
  app_code_first_decimal_digit_line(
    card,
    "In ",
    whole_text,
    "3",
    "5",
    color_low,
  );
  app_code_first_decimal_digit_line(
    card,
    "in ",
    whole_text,
    "4",
    "999",
    color_high,
  );
  return card;
}
