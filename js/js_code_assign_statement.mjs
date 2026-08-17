import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_assign_statement(left, right) {
  arguments_assert(arguments, 2);
  ('the line that gives a name that already exists a different value, written the way a person writes it: a = 2;');
  ("The same line as the one that first gives a value a name, with the let taken off. That is the whole of the difference in JS and the whole of the difference here.");
  ("The other builder of this line puts a space in front of the semicolon, because one of the replacing apps takes a line apart into words and needs to find the semicolon as a word of its own. A lesson is read rather than taken apart, so it wants the spacing a learner will type; the two cannot be one function while both of those are true, which is the same split the let builder already lives with.");
  let assigned = js_code_assign(left, right);
  let code = js_code_statement(assigned);
  return code;
}
