import { arguments_assert } from "./arguments_assert.mjs";
import { js_selects_literal } from "./js_selects_literal.mjs";
import { js_literal_value_set } from "./js_literal_value_set.mjs";
import { number_from_text } from "./number_from_text.mjs";
export function js_selects_number_set(ast, selects, number_text) {
  "$plain number_text";
  "Puts a number in place of the value a selection holds.";
  "IT IS THE SISTER OF THE ONE THAT WRITES A WORD, split from it only because a command line hands every argument over as text. A number written into a file is written without quotation marks and a word with them, so the two cannot be told apart once the argument has arrived - and a number set as a word turns a count into a spelling, which nothing downstream would complain about and everything reading it would get wrong.";
  "THE CONVERSION HAPPENS HERE AND NOWHERE DEEPER, so the one function that writes a value stays about writing rather than about guessing what a caller meant.";
  arguments_assert(arguments, 3);
  let literal = js_selects_literal(ast, selects);
  let number = number_from_text(number_text);
  js_literal_value_set(literal, number);
}
