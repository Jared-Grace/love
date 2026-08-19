import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_comparison_symbols } from "./app_code_comparison_symbols.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { app_code_comparison_operands_wanted } from "./app_code_comparison_operands_wanted.mjs";
export function app_code_lesson_expression_choose_order_comparison_side(
  want_true,
) {
  arguments_assert(arguments, 1);
  ("one side of an && line: a comparison drawn at random, with two numbers chosen so that it comes out true, or comes out false, whichever was asked for");
  ("A side is given back as its three pieces rather than as writing, because the line it is going into is built as a shape and printed from the shape. Handed over as text it would have to be taken apart again by whatever printed the line around it.");
  ("The comparison is drawn from all six, === included. The lesson before this one left === out on purpose, because there the comparison was the whole of what a screen had to add; here the new thing is the && above them, and a side that says 3 === 3 teaches it exactly as well as one that says 3 < 5.");
  ("Which of true and false the side has to come to is asked for rather than drawn, because the whole line is asked for as a true one or a false one and the two sides are what has to add up to it.");
  let symbols = app_code_comparison_symbols();
  let symbol = list_random_item(symbols);
  let operands = app_code_comparison_operands_wanted(symbol, want_true);
  let parts = {
    left: operands.left,
    right: operands.right,
    symbol,
  };
  return parts;
}
