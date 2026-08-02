import { js_selects_block_body } from "./js_selects_block_body.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_block_local_add_generic(ast, selects, name, value_code) {
  arguments_assert(arguments, 4);
  ("Binds a name to a starting value at the end of a chosen block - the first line");
  ("of every function that counts, gathers or tallies anything, and the one line");
  ("the naming vocabulary could not write.");
  ("The written value stays inside this family. Each relative above it turns one");
  ("kind of starting value into that text from an argument that is only ever a");
  ("name or a plain value, so the granted commands never carry a line of code and");
  ("the whole path can be approved once instead of every time.");
  let body = js_selects_block_body(selects);
  ("Asking for the name as an expression is how it is checked: anything that is");
  ("not one bare name is refused here rather than written into the file.");
  js_identifier_expression(name);
  let named = text_combine_3("let ", name, " = ");
  let code = text_combine_3(named, value_code, ";");
  let statement = js_parse_statement(code);
  list_add(body, statement);
}
