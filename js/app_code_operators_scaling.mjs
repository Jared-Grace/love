import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_operators_strong } from "./app_code_operators_strong.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
export function app_code_operators_scaling() {
  arguments_assert(arguments, 0);
  ("every operator javascript works out at the strength of a times or a divide, by its symbol: * and / and the remainder sign %");
  ("A STRENGTH class, and not a lesson class. The pair a lesson solves first is asked for in its own place and stays a pair, because a lesson that mixes strengths draws one operator from each of two classes, and the remainder sign is not one a learner meets that early.");
  ("The remainder sign belongs at this strength because javascript works it out exactly when it works out a divide. Left out of every class it took a comparison's strength by falling through, and the printer then wrote the shape 14 % (4 * 2) as the line 14 % 4 * 2, which means something else.");
  ("Built on top of the lesson pair rather than spelling the times and the divide again, so a sign added to arithmetic reaches both lists at once.");
  let lesson = app_code_operators_strong();
  let remainder = js_operator_percent_symbol();
  let symbols = list_concat_single_right(lesson, remainder);
  return symbols;
}
