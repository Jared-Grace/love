import { app_code_division_dividend } from "./app_code_division_dividend.mjs";
import { app_code_division_divisor } from "./app_code_division_divisor.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
export function app_code_lesson_expression_remainder_divide_percent_expression(
  division,
) {
  arguments_assert(arguments, 1);
  ("the % shorthand for a written-out division: 14 / 4 comes back as 14 % 4");
  ("A batch line in this lesson only ever spells the division and the long remainder formula, so wherever the short form is wanted it has to be worked out again from the two numbers. That working out was written twice - once where the quizzes are made, once where a wrong-answer line is remapped - and a second copy of it is a second place for the two numbers to be read in the wrong order.");
  ("The numbers are read out of the text rather than handed in, because the text is what the batch holds and every caller would otherwise have to take it apart the same way first.");
  let dividend = app_code_division_dividend(division);
  let divisor = app_code_division_divisor(division);
  let r = js_code_binary_spaced_nb(dividend, "%", divisor);
  return r;
}
