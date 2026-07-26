import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_between_two_wholes(
  container,
  decimal_text,
  lower_text,
  upper_text,
) {
  "the shared 'a decimal sits between two whole numbers' explanation, using the < comparison taught earlier: Math.floor takes the lower of the two, Math.ceil the upper. Renders 'X is between A and B' then the two comparisons 'A < X' and 'X < B' as code tiles, so the WHY of rounding is grounded in ordering the learner already knows";
  html_div_cycle_code(container, [
    "",
    decimal_text,
    " is between ",
    lower_text,
    " and ",
    upper_text,
  ]);
  let comparison_low = text_combine_multiple([lower_text, " < ", decimal_text]);
  let comparison_high = text_combine_multiple([
    decimal_text,
    " < ",
    upper_text,
  ]);
  html_div_cycle_code(container, [
    "",
    comparison_low,
    " and ",
    comparison_high,
  ]);
}
