import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_assign } from "./js_code_assign.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_keyword_let } from "./js_keyword_let.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_let_statement(left, right) {
  arguments_assert(arguments, 2);
  ("the line that gives a value a name, written the way a person writes it: let a = 1;");
  ("The other builder of this line leaves a space in front of the semicolon, which one of the replacing apps needs to find the semicolon as a word of its own. A lesson is read rather than taken apart, so it wants the spacing a learner will type, and the two cannot be one function while both of those are true.");
  let keyword = js_keyword_let();
  let assigned = js_code_assign(left, right);
  let named = text_combine_multiple([keyword, " ", assigned]);
  let code = js_code_statement(named);
  return code;
}
