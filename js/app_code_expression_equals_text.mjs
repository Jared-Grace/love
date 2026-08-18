import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_expression_equals_text(solved_code, value_text) {
  arguments_assert(arguments, 2);
  ("one piece of a line written beside what it comes to: (3 * 7) === 21");
  ("Said with === rather than with becomes or equals, because that is how this track has written what a line comes to since the very first lesson that printed an answer.");
  ("Written here once because it is said twice about the same press - by the tutorial, of the press being made, and by the lesson after it, of the press already made - and two spellings of the same working out would read as two different things having happened.");
  ("The piece is always gathered into brackets, whatever it is. Left bare, a line like 5 === 8 === false asks the reader to take the two === in the order they are written, and nothing in this track has taught an order for operators of the same strength - order has only ever come from strength or from brackets. Bracketed, it needs neither.");
  ("Always rather than only where it is needed, because the reader is being taught one idea here and a bracket that comes and goes is a second one. A rule with no case in it is the rule they can carry to the next line they meet.");
  let gathered = text_wrap_parenthesis(solved_code);
  let equals = js_operator_triple_equal_symbol();
  let worked_out = text_combine_multiple([
    gathered,
    " ",
    equals,
    " ",
    value_text,
  ]);
  return worked_out;
}
