import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { text_decimal_combine } from "./text_decimal_combine.mjs";
import { list_get } from "./list_get.mjs";
import { add } from "./add.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_round_generic_above_term(
  ordinary_low,
  ordinary_high,
  whole_text,
  extreme_digits,
  whole,
  rounds_up,
  root,
  metaphor_render,
) {
  arguments_assert(arguments, 8);
  let digit = integer_random(ordinary_low, ordinary_high);
  let decimal = text_decimal_combine(whole_text, digit);
  let extreme_low = list_get(extreme_digits, 0);
  let extreme_high = list_get(extreme_digits, 1);
  let extreme_digit = integer_random(extreme_low, extreme_high);
  let extreme_decimal = text_decimal_combine(whole_text, extreme_digit);
  let input = add(whole, 1);
  let whole_up = text_to(input);
  let input2 = integer_random(2, 7);
  let whole_stays = text_to(input2);
  let chosen_whole = whole_text;
  let other_whole = whole_up;
  if (rounds_up) {
    chosen_whole = whole_up;
    other_whole = whole_text;
  }
  let metaphor = app_code_container_light_blue(root);
  metaphor_render(metaphor);
  let define = app_code_container_light_blue(root);
  html_div_cycle_code(define, ["", decimal, " is a decimal number"]);
  let no_decimal = html_div(define);
  html_span_text_code_dark(no_decimal, whole_text);
  html_span_text(no_decimal, " has no decimal, so ");
  html_span_text_code_dark(no_decimal, whole_text);
  html_span_text(no_decimal, " is a ");
  let term = html_span_text(no_decimal, "whole number");
  let r = {
    decimal,
    extreme_decimal,
    whole_up,
    whole_stays,
    chosen_whole,
    other_whole,
    define,
    term,
  };
  return r;
}
