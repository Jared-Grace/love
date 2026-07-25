import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_block_body_add_code_generic } from "./js_block_body_add_code_generic.mjs";
export function js_block_body_add_code_first(ast, selects, code) {
  arguments_assert(arguments, 3);
  let lambda_add = list_add_first;
  js_block_body_add_code_generic(ast, selects, code, lambda_add);
}
