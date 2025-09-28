import { list_remove } from "./list_remove.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { assert_arguments } from "./assert_arguments.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { marker } from "./marker.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_dollar_aa({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  list_remove(stack2, stack1);
  let body_block = js_declaration_single_block_body(ast);
  let code = js_code_call(assert_arguments.name);
  let expression = js_parse_statement(code);
  list_add_first(body_block, expression);
  marker("1");
  return;
}
