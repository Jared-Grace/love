import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_assign_operator_statement(left, operator, right) {
  arguments_assert(arguments, 3);
  ("the line that gives a name what it holds combined with a value, written the short way: a += b; - the operator handed in, then an equals, with a space either side that a line break cannot take");
  ("The spaces are the ones that do not break, as in a sum, so a title never splits the line between the name and what is done to it.");
  let assign_operator = text_combine(operator, "=");
  let combined = js_code_binary_spaced_nb(left, assign_operator, right);
  let code = js_code_statement(combined);
  return code;
}
