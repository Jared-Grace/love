import { app_code_first_decimal_digit_words } from "./app_code_first_decimal_digit_words.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
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
  ("The phrase naming the digit is said PLAINLY here. It is coloured only where it stands beside the digit written in code, which is the whole of what the colour does - tie the words to the code. This line has no code to tie them to, and a rule stated twice in a colour would read as being about a particular digit rather than about any of them.");
  ("The lead is written as its own span rather than as the first part of the cycled list, because the cycling helper alternates plain text and code tiles from its first item onward, and the digits have to land on the tiles.");
  ("The comma before or is deliberate. The list builder this repo already has leaves it out, and it is wanted here: a learner reading 0, 1, 2, 3 or 4 aloud can hear the last two as one item.");
  let div = html_div(parent);
  html_span_text(div, "If the ");
  let text = app_code_first_decimal_digit_words();
  html_span_text(div, text);
  let parts = [" is "];
  let last_index = list_size_subtract(first_digits, 1);
  let second_last_index = subtract(last_index, 1);
  let index = 0;
  for (let digit of first_digits) {
    parts.push(digit);
    let last = equal(index, last_index);
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
