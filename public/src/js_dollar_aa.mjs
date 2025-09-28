import { js_code_call } from "./js_code_call.mjs";
import { assert_arguments } from "./assert_arguments.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_declaration_single_block_body } from "./js_declaration_single_block_body.mjs";
import { marker } from "./marker.mjs";
export function js_dollar_aa({
  remaining,
  node,
  stack1,
  stack2,
  stack3,
  ast,
  afters,
}) {
  let body_block = js_declaration_single_block_body(ast);
  let code = js_code_call(assert_arguments.name, []);
  list_add_first(body_block, item);
  marker("1");
  return;
}
