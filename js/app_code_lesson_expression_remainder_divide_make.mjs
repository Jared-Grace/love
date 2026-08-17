import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_uneven_dividend_only } from "./app_code_uneven_dividend_only.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_expression_remainder_divide_make(
  divisor,
  quotient,
) {
  arguments_assert(arguments, 2);
  ("given a / b, the answer to BUILD is the remainder formula a - Math.floor(a / b) * b; the dividend is quotient*divisor + a leftover so the division is uneven and the remainder is real");
  let dividend = app_code_uneven_dividend_only(quotient, divisor);
  let division = js_code_binary_spaced_nb(dividend, "/", divisor);
  let t = text_to(divisor);
  let whole_part = text_combine_multiple(["Math.floor(", division, ") * ", t]);
  let t2 = text_to(dividend);
  let formula = text_combine_multiple([t2, " - ", whole_part]);
  let r = {
    question: division,
    answer: formula,
  };
  return r;
}
