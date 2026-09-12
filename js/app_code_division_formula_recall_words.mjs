import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_division_formula_recall_words(what, tree_of) {
  arguments_assert(arguments, 2);
  ("the row that puts a division formula back in front of a learner: Remember, the whole part of 14 / 4 is Math.floor(14 / 4) * 4, as the pieces of one line, with the name of the thing and the shape of its formula handed in");
  ("Five lessons say a sentence of this shape - integer division, the whole part and the remainder - and they must all say it in the same words. The last two come in pairs, asked for all at once on one screen and pressed apart a part at a time on the screen in front of it; integer division has only the pressing screen saying it, because the screen that asks that line all at once is the screen that teaches it and has nothing to put back in front of anybody. A learner recognises a sentence they have already read in the second it takes, while a near-copy stops them to compare two sentences that mean the same thing.");
  ("The formula is handed in as a shape and written out from the shape, rather than typed here as text. Typed, the day a line changed the sentence introducing it would have gone on describing the line before, and nothing would have complained.");
  ("The worked numbers are the same two on every one of those screens, so a learner following the run meets one example rather than five, and the formula they were shown is the formula they are asked for.");
  let dividend = 14;
  let divisor = 4;
  let divided_by = js_operator_division_symbol();
  let division = app_code_expression_node(dividend, divided_by, divisor);
  let division_code = app_code_expression_code(division);
  let formula = tree_of(dividend, divisor);
  let formula_code = app_code_expression_code(formula);
  let lead = text_combine_multiple(["Remember, the ", what, " of "]);
  let words = [lead, division_code, " is ", formula_code];
  return words;
}
