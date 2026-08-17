import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_expression_equals_text(solved_code, value_text) {
  arguments_assert(arguments, 2);
  ("one piece of a line written beside what it comes to: 3 * 7 === 21");
  ("Said with === rather than with becomes or equals, because that is how this track has written what a line comes to since the very first lesson that printed an answer.");
  ("Written here once because it is said twice about the same press - by the tutorial, of the press being made, and by the lesson after it, of the press already made - and two spellings of the same working out would read as two different things having happened.");
  let equals = js_operator_triple_equal_symbol();
  let worked_out = text_combine_multiple([
    solved_code,
    " ",
    equals,
    " ",
    value_text,
  ]);
  return worked_out;
}
