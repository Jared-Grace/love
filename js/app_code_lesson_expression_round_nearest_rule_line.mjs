import { equal } from "./equal.mjs";
import { app_code_first_decimal_digit_phrase } from "./app_code_first_decimal_digit_phrase.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_lesson_expression_round_nearest_rule_line(
  parent,
  first_digits,
  like_name,
) {
  arguments_assert(arguments, 3);
  ("one half of the rounding rule: which first digits send a number one way, and the function Math.round then behaves like");
  ("Said in the one place because the two halves differ only in their digits and in the function named at the end, and a pair of hand-written lines could come to read as two rules rather than one rule with two cases.");
  ("The digits are handed over rather than typed here, because which digits belong to which half IS the rule - a caller that could not choose them would be a caller with nothing to say.");
  ("The line is built from spans rather than handed to the code-cycling helper whole, because the phrase naming the digit is coloured and a cycled part is plain text or a code tile with nothing in between.");
  ("The comma before or is deliberate. The list builder this repo already has leaves it out, and it is wanted here: a learner reading 0, 1, 2, 3 or 4 aloud can hear the last two as one item.");
  let div = html_div(parent);
  html_span_text(div, "If the ");
  app_code_first_decimal_digit_phrase(div);
  let parts = [" is "];
  let digit_count = list_size(first_digits);
  let last_index = subtract(digit_count, 1);
  let index = 0;
  for (let digit of first_digits) {
    parts.push(digit);
    let last = equal(index, last_index);
    let second_last_index = subtract(last_index, 1);
    let before_last = equal(index, second_last_index);
    if (last) {
      parts.push(" then ");
    } else if (before_last) {
      parts.push(", or ");
    } else {
      parts.push(", ");
    }
    index = index + 1;
  }
  parts.push("Math.round");
  parts.push(" is like ");
  parts.push(like_name);
  html_cycle_code(div, parts);
  return div;
}
