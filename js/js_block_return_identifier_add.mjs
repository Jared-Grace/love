import { js_selects_block_body } from "./js_selects_block_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_statement_return_argument } from "./js_statement_return_argument.mjs";
import { list_add } from "./list_add.mjs";
export function js_block_return_identifier_add(ast, selects, identifier_name) {
  arguments_assert(arguments, 3);
  ("Hands back something already in scope, at the end of a chosen block. The last");
  ("line of nearly every function here, and the last thing that still needed a");
  ("written line to say.");
  ("What is handed back has to be a name and not a working-out, which is this");
  ("repo's own shape anyway — a step gets a name and the name is returned.");
  let body = js_selects_block_body(selects);
  let expression = js_identifier_expression(identifier_name);
  let statement = js_statement_return_argument(expression);
  list_add(body, statement);
}
