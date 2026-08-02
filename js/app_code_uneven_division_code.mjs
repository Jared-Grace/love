import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_uneven_dividend_only } from "./app_code_uneven_dividend_only.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
export function app_code_uneven_division_code(quotient, divisor) {
  arguments_assert(arguments, 2);
  ("A division written out as code, from the whole result wanted and the number");
  ("divided by - and it does not come out even.");
  ("Every lesson in the dividing family shows the learner the same line and then");
  ("asks a different thing about it: which number is the dividend, which is the");
  ("divisor, what the whole part comes to. Writing the line was the step they all");
  ("shared and each one held its own copy of.");
  ("The number divided is worked out rather than given, because a division chosen");
  ("by its answer is the only way to be sure it has a leftover.");
  let dividend = app_code_uneven_dividend_only(quotient, divisor);
  let code = js_code_binary_spaced_nb(dividend, "/", divisor);
  return code;
}
