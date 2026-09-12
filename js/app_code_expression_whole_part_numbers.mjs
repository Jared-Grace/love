import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_uneven_dividend } from "./app_code_uneven_dividend.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_whole_part_numbers() {
  arguments_assert(arguments, 0);
  ("two numbers to divide on a line that rounds the division down, drawn so the division never comes out even and never runs on past two figures after the point: 17 and 5, or 9 and 4");
  ("The leftover is the whole reason these lines exist, so a division that came out even would leave the rounding down with nothing to do and the learner with nothing to read.");
  ("★ THE DIVISOR COMES FROM A SHORTER LIST THAN THE ONE THE LESSONS ASKING THESE LINES ALL AT ONCE DRAW FROM. Those lessons print the line and then its value, and nothing in between, so 6 costs them nothing. A line pressed one part at a time prints what is left after every press, and after the first press on 23 / 6 what is left reads Math.floor(3.8333333333333335) - which fills the line with a number the lesson is not about and that no learner can hold.");
  ("Every divisor here divides to a number that ends within two figures, so what stands after the first press is 2.5 or 3.25 or 2.4 and a learner reads it at a glance.");
  ("The quotient is the small one the lessons around this use, so the value of the line stays inside what a learner can check in their head.");
  let quotient = integer_random(2, 3);
  let divisor = list_random_item([2, 4, 5, 10]);
  let drawn = app_code_uneven_dividend(quotient, divisor);
  let dividend = property_get(drawn, "dividend");
  let numbers = {
    dividend,
    divisor,
  };
  return numbers;
}
