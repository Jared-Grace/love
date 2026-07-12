import { list_remove } from "./list_remove.mjs";
import { js_code_call } from "./js_code_call.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
export function js_dollar_aa({
  remaining,
  node,
  stack_1,
  stack_2,
  stack_3,
  ast,
  afters,
}) {
  list_remove(stack_2, stack_1);
  let body_block = js_flo_body(ast);
  let code = js_code_call(arguments_assert.name);
  let expression = js_parse_statement(code);
  list_add_first(body_block, expression);
  return;
}
