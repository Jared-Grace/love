import { app_code_division_worked_numbers } from "./app_code_division_worked_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_division_formula_recall_words(what, tree_of) {
  arguments_assert(arguments, 2);
  ("the row that puts a division formula back in front of a learner: Remember, the whole part of 14 / 4 is Math.floor(14 / 4) * 4, as the pieces of one line, with the name of the thing and the shape of its formula handed in");
  ("Four lessons say a sentence of this shape - the whole part and the remainder, each asked for all at once on one screen and pressed apart a part at a time on the screen in front of it - and each pair must say it in the same words. A learner recognises a sentence they have already read in the second it takes, while a near-copy stops them to compare two sentences that mean the same thing.");
  ("The formula is handed in as a shape and written out from the shape, rather than typed here as text. Typed, the day a line changed the sentence introducing it would have gone on describing the line before, and nothing would have complained.");
  ("The worked numbers are the same two on all four screens, and they are asked for rather than typed here, so a learner following the run meets one example rather than four, and the formula they were shown is the formula they are asked for.");
  let numbers = app_code_division_worked_numbers();
  let dividend = property_get(numbers, "dividend");
  let divisor = property_get(numbers, "divisor");
  let divided_by = js_operator_division_symbol();
  let division = app_code_expression_node(dividend, divided_by, divisor);
  let division_code = app_code_expression_code(division);
  let formula = tree_of(dividend, divisor);
  let formula_code = app_code_expression_code(formula);
  let lead = text_combine_multiple(["Remember, the ", what, " of "]);
  let words = [lead, division_code, " is ", formula_code];
  return words;
}
