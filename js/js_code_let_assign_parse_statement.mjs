import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_let_assign } from "./js_code_let_assign.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_code_let_assign_parse_statement(left, right) {
  arguments_assert(arguments, 2);
  ("A line giving a name to something, built and then read back as parsed code.");
  ("Declaring a local, lifting a repeated value up to a name of its own, adding");
  ("the line that names a screen's root. Each needs the line as parsed code, not");
  ("as words, because that is what can be put into a file. Spelling it out is only");
  ("the way to get there, and the text itself is thrown away as soon as it is");
  ("read.");
  let code = js_code_let_assign(left, right);
  let statement = js_parse_statement(code);
  return statement;
}
