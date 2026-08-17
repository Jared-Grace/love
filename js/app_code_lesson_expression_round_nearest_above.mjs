import { arguments_assert } from "./arguments_assert.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { add } from "./add.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_lesson_expression_round_nearest_round_code } from "./app_code_lesson_expression_round_nearest_round_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_code_first_decimal_digit_line } from "./app_code_first_decimal_digit_line.mjs";
import { app_code_lesson_expression_round_nearest_rounds_line } from "./app_code_lesson_expression_round_nearest_rounds_line.mjs";
export function app_code_lesson_expression_round_nearest_above(root) {
  arguments_assert(arguments, 1);
  ("example before rule: show a round-down and a round-up first, THEN name it nearest, THEN teach how it decides - the first digit after the decimal point, shown on a two-digit decimal so first is unambiguous. Randomized each visit");
  ("the whole part avoids 3 and 4 so it never equals a highlighted first digit (3 or 4 below), which would make the number look like it repeats a digit");
  let whole = list_random_item([2, 5, 6, 7]);
  let whole_text = text_to(whole);
  ("the two highlighted first digits get two of the shared categorical chip colours (amber and blue) so digit colouring is chosen the same way as everywhere else, and the two digits read as clearly distinct");
  let color_low = app_code_lesson_chip_color(3);
  let color_high = app_code_lesson_chip_color(2);
  let low_digit = integer_random(1, 4);
  let t = text_to(low_digit);
  let low_decimal = text_combine_multiple([whole_text, ".", t]);
  let high_digit = integer_random(5, 9);
  let t4 = text_to(high_digit);
  let high_decimal = text_combine_multiple([whole_text, ".", t4]);
  let input = add(whole, 1);
  let whole_up = text_to(input);
  ("examples first, then name it, then explain how it decides");
  let examples = app_code_container_light_blue(root);
  let v = app_code_lesson_expression_round_nearest_round_code(low_decimal);
  html_div_cycle_code(examples, ["", v, " is ", whole_text]);
  let v2 = app_code_lesson_expression_round_nearest_round_code(high_decimal);
  html_div_cycle_code(examples, ["", v2, " is ", whole_up]);
  let name_line = html_div(examples);
  html_span_text_code_dark(name_line, "Math.round");
  html_span_text(name_line, " gives the ");
  let term = html_span_text(name_line, "nearest");
  html_bold(term);
  html_span_text(name_line, " whole number");
  ("concrete first: two worked examples with DIFFERENT first digits in different colours, then the knife-edge pair rounding down then up, THEN the general rule, and the one-line takeaway LAST");
  let rule = app_code_container_light_blue(root);
  app_code_first_decimal_digit_line(
    rule,
    "For example, in ",
    whole_text,
    "3",
    "5",
    color_low,
  );
  app_code_first_decimal_digit_line(
    rule,
    "in ",
    whole_text,
    "4",
    "999",
    color_high,
  );
  app_code_lesson_expression_round_nearest_rounds_line(
    "4999",
    ' rounds "down" to ',
    whole_text,
    rule,
    whole_text,
  );
  app_code_lesson_expression_round_nearest_rounds_line(
    "5",
    ' rounds "up" to ',
    whole_up,
    rule,
    whole_text,
  );
  html_div_cycle_code(rule, [
    "If the first digit after the decimal point is ",
    "0",
    ", ",
    "1",
    ", ",
    "2",
    ", ",
    "3",
    ", or ",
    "4",
    " then ",
    "Math.round",
    " is like ",
    "Math.floor",
  ]);
  html_div_cycle_code(rule, [
    "If the first digit after the decimal point is ",
    "5",
    ", ",
    "6",
    ", ",
    "7",
    ", ",
    "8",
    ", or ",
    "9",
    " then ",
    "Math.round",
    " is like ",
    "Math.ceil",
  ]);
  html_div_cycle_code(rule, [
    "The first digit after the decimal point decides which way it rounds",
  ]);
}
