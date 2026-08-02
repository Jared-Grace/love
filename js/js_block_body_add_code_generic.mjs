import { js_selects_block_body } from "./js_selects_block_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_block_body_add_code_generic(
  ast,
  selects,
  code,
  lambda$body$statement,
) {
  arguments_assert(arguments, 4);
  ("A transform in the selector-plus-transform contract: the selected node is the");
  ("block to add to, so which block (a then-block, an else-block, a loop body) is");
  ("the selector's job, and where in it (first or last) is the caller's adder.");
  let body = js_selects_block_body(selects);
  let statement = js_parse_statement(code);
  lambda$body$statement(body, statement);
}
